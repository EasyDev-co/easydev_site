# Generated by Django 5.0.6 on 2024-06-24 21:30

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Vacancy',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='Создан')),
                ('modified', models.DateTimeField(auto_now=True, verbose_name='Изменен')),
                ('title', models.CharField(max_length=256, verbose_name='Заголовок')),
                ('post', models.CharField(max_length=256, verbose_name='Должность')),
                ('description', models.TextField(max_length=1024, verbose_name='Описание вакансии')),
                ('salary_fork_lt', models.PositiveIntegerField(blank=True, null=True, verbose_name='Нижняя граница зарлатной вилки')),
                ('salary_fork_gt', models.PositiveIntegerField(blank=True, null=True, verbose_name='Верхняя граница зарлатной вилки')),
                ('image', models.ImageField(upload_to='vacancies/image', verbose_name='Фотография вакансии')),
                ('is_active', models.BooleanField(default=False, verbose_name='Активность вакансии')),
            ],
            options={
                'verbose_name': 'Вакансия',
                'verbose_name_plural': 'Вакансии',
                'ordering': ('title',),
            },
        ),
        migrations.CreateModel(
            name='VacancyForm',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='Создан')),
                ('modified', models.DateTimeField(auto_now=True, verbose_name='Изменен')),
                ('name', models.CharField(max_length=256, verbose_name='Имя')),
                ('email', models.EmailField(max_length=254, verbose_name='Электронная почта')),
                ('link', models.URLField(blank=True, null=True, verbose_name='Ссылка на социальную сеть')),
                ('file', models.FileField(blank=True, null=True, upload_to='vacancies/files', verbose_name='Файл')),
            ],
            options={
                'verbose_name': 'Форма вакансии',
                'verbose_name_plural': 'Формы вакансий',
                'ordering': ('name',),
            },
        ),
    ]
