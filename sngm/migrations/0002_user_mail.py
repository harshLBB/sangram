# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-06 20:00
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sngm', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='mail',
            field=models.BooleanField(default=False),
        ),
    ]