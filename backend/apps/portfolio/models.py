from django.db import models
from django.contrib.contenttypes.fields import GenericRelation

from apps.utils.models_mixins.models_mixins import UUIDMixin, TimeStampedMixin
from apps.utils.universal_models.universal_models import Image


class Portfolio(TimeStampedMixin, UUIDMixin):
    """Модель портфолио"""
    client = models.CharField(verbose_name='Клиент', max_length=256)
    name = models.CharField(verbose_name='Наименование кейса', max_length=256)
    description = models.TextField(verbose_name='Описание кейса', max_length=4096)
    decision = models.TextField(verbose_name='Решение кейса', max_length=4096)
    technology_stack = models.CharField(verbose_name='Стэк технологий', max_length=1024)
    task = models.TextField(verbose_name='Задача кейса', max_length=4096)
    images = GenericRelation(Image, verbose_name='Фотографии кейса', related_query_name='images')
    video = models.FileField(verbose_name='Видео услуги', upload_to='amenities/video/', blank=True, null=True)
    gif = models.ImageField(verbose_name='GIF услуги', upload_to='amenities/GIF/', blank=True, null=True)

    class Meta:
        verbose_name = 'Портфолио'
        verbose_name_plural = 'Портфолио'
        ordering = ('created',)

    def __str__(self):
        return self.name
