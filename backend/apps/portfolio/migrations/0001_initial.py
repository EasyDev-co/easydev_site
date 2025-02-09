# Generated by Django 5.0.6 on 2024-06-28 11:47

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Portfolio',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='Создан')),
                ('modified', models.DateTimeField(auto_now=True, verbose_name='Изменен')),
                ('name', models.CharField(max_length=256, verbose_name='Ноименование кейса')),
                ('description', models.TextField(max_length=4096, verbose_name='Описание кейса')),
                ('team', models.CharField(max_length=1024, verbose_name='Команда, выполнявшая кейс')),
                ('video', models.FileField(blank=True, null=True, upload_to='amenities/video/', verbose_name='Видео услуги')),
                ('gif', models.ImageField(blank=True, null=True, upload_to='amenities/GIF/', verbose_name='GIF услуги')),
                ('job_description', models.TextField(max_length=4096, verbose_name='Описание проделанной работы')),
                ('solved_problems', models.TextField(max_length=4096, verbose_name='Решенные проблемы')),
                ('technology_stack', models.CharField(max_length=1024, verbose_name='Стэк технологий')),
                ('is_active', models.BooleanField(default=False, verbose_name='Активность')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
