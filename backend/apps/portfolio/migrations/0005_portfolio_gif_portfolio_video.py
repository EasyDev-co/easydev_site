# Generated by Django 5.1 on 2024-09-07 07:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0004_remove_portfolio_gif_remove_portfolio_is_active_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='portfolio',
            name='gif',
            field=models.ImageField(blank=True, null=True, upload_to='amenities/GIF/', verbose_name='GIF услуги'),
        ),
        migrations.AddField(
            model_name='portfolio',
            name='video',
            field=models.FileField(blank=True, null=True, upload_to='amenities/video/', verbose_name='Видео услуги'),
        ),
    ]
