# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-06 19:49
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Sport',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('min_number', models.IntegerField(blank=True, null=True)),
                ('max_number', models.IntegerField(blank=True, null=True)),
                ('rules', models.CharField(default='content', max_length=500)),
                ('description', models.CharField(default='content', max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('phone_number', models.CharField(max_length=12)),
                ('college', models.CharField(max_length=100)),
                ('is_approved', models.BooleanField(default=False)),
                ('paid', models.IntegerField(blank=True, null=True)),
            ],
        ),
    ]
