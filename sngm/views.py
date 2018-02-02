from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.urls import reverse
from .models import *
from django.contrib.auth.decorators import login_required
from django.core.mail import send_mail
from django.core.mail import EmailMessage
# Create your views here.

def sport_detail(request, sport_name):
    try :
        sport = Sport.objects.get(name=sport_name)
        return render(request, 'sngm/sport.html', {'sport' : sport})
    except :
        return render(request,'sngm/status.html', {"status" : "We have encountered an error. Please try  again.."})

def error_redirect(request):
    return render(request,'sngm/status.html', {"status" : "We have encountered an error. Please try again.."})

def create_user(request):
    try:
        user_list = User.objects.all()
        if(len(request.POST['number'])>11):
            return render(request, 'sngm/status.html', {"status": "Enter a valid mobile number"})
        elif (len(request.POST['number']) < 10):
            return render(request, 'sngm/status.html', {"status": "Enter a valid mobile number"})
        elif (not request.POST['number'].isdigit()):
            return render(request, 'sngm/status.html', {"status": "Enter a valid mobile number"})

        new_user = User(
        name = request.POST['name'],
        email = request.POST['email'],
        phone_number = request.POST['number'],
        college = request.POST['college'],
        is_approved = False
        )
        already_registered = False
        for user in user_list:
            if (request.POST['email'] == user.email):
                already_registered = True
        if ( not already_registered):
            new_user.save()
            return HttpResponseRedirect(reverse('sangram:home'))
        else :
            return render(request,'sngm/status.html', {"status" : "This email is already registered. Please contact us if you are facing any trouble.."})
    except :
        return render(request,'sngm/status.html', {"status" : "We have encountered an error. Please try  again.."})

@login_required(login_url='/')
def change_status(request, email, status):
    try:
        user = User.objects.get(email=email)
        if ( str(status).strip() == 'True' ):
            user.is_approved = True
            user.save()
            return HttpResponseRedirect(reverse('sangram:user_list'))
        else :
            user.delete()
            return HttpResponseRedirect(reverse('sangram:user_list'))
    except :
        return HttpResponseRedirect(reverse('sangram:redirect'))

@login_required(login_url='/')
def user_list(request):
    user_list = User.objects.filter(is_approved=False)
    return render(request, 'sngm/user_list.html', {"user_list":user_list})

def leader_list(request):
    user_list = User.objects.filter(is_approved=True)
    return render(request, 'sngm/leader_list.html', {"user_list":user_list})

@login_required(login_url='/')
def send_email(request):
    user_list = User.objects.filter(is_approved=True)
    for user in user_list:
        if (not user.mail):
            send_mail('Subject here', 'Here is the message.', 'srivathsaeric@gmail.com', [user.email], fail_silently=False)
    return HttpResponseRedirect(reverse('sangram:home'))
