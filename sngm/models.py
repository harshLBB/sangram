from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Sport(models.Model):
    name = models.CharField(max_length=100,)
    min_number = models.IntegerField(null = True , blank = True)
    max_number = models.IntegerField(null = True , blank = True)
    rules = models.CharField(max_length=500, default="content")
    description = models.CharField(max_length=500, default="content")
    def __str__(self):
        return str(self.name)

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(max_length = 12)
    college = models.CharField(max_length=100)
    is_approved = models.BooleanField(default=False, blank= True)
    paid = models.IntegerField(null = True, blank = True)
    mail = models.BooleanField(default=False)
    def __str__(self):
        return self.college
