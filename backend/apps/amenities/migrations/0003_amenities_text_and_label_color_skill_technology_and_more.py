# Generated by Django 5.1 on 2024-09-02 22:36

import colorfield.fields
import django.db.models.deletion
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('amenities', '0002_amenities_gif_amenities_video_alter_amenities_photo'),
    ]

    operations = [
        migrations.AddField(
            model_name='amenities',
            name='text_and_label_color',
            field=colorfield.fields.ColorField(default='#FFFFFF', image_field=None, max_length=25, samples=None, verbose_name='Цвет текста'),
        ),
        migrations.CreateModel(
            name='Skill',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='Создан')),
                ('modified', models.DateTimeField(auto_now=True, verbose_name='Изменен')),
                ('title', models.CharField(max_length=256, verbose_name='Заголовок скилла')),
                ('description', models.CharField(max_length=2048, verbose_name='Описание скилла')),
                ('amenities', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='skill_of_amenities', to='amenities.amenities', verbose_name='Услуга')),
            ],
            options={
                'verbose_name': 'Скилл',
                'verbose_name_plural': 'Скиллы',
                'ordering': ('created',),
            },
        ),
        migrations.CreateModel(
            name='Technology',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='Создан')),
                ('modified', models.DateTimeField(auto_now=True, verbose_name='Изменен')),
                ('name', models.CharField(max_length=256, verbose_name='Название технологии')),
                ('photo', models.ImageField(upload_to='amenities/technology/photo', verbose_name='Фото технологии')),
                ('description', models.CharField(max_length=2048, verbose_name='Описание технологии')),
                ('amenities', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='technology_of_amenities', to='amenities.amenities', verbose_name='Услуга')),
            ],
            options={
                'verbose_name': 'Технология',
                'verbose_name_plural': 'Технологии',
                'ordering': ('created',),
            },
        ),
        migrations.DeleteModel(
            name='AmenitiesBlock',
        ),
    ]