# Generated by Django 5.0.6 on 2024-06-29 14:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='portfolio',
            options={'ordering': ('created',), 'verbose_name': 'Портфолио', 'verbose_name_plural': 'Портфолио'},
        ),
    ]
