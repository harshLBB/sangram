from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic.base import TemplateView
from . import views

app_name = 'sangram'

urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name='sngm/index.html'), name='home'),
    url(r'^sponsors$', TemplateView.as_view(template_name='sngm/sponsors.html')),
    url(r'^(?P<sport_name>[\w\-]+)/$', views.sport_detail, name='detail'),
    url(r'^register$', views.create_user, name='create_user'),
    url(r'^user_listxxx$', views.user_list, name='user_list'),
    url(r'^leader_list$', views.leader_list, name='leader_list'),
    url(r'^change_status/(?P<email>.+)/(?P<status>.+)$', views.change_status, name='change_status'),
    url(r'^send_email$', views.send_email, name='send_email'),
    url(r'^', views.error_redirect, name='redirect'),
]
