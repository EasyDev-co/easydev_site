from django.db import models
from django.contrib.contenttypes.fields import GenericRelation

from apps.utils.models_mixins.models_mixins import UUIDMixin, TimeStampedMixin
from apps.utils.universal_models.universal_models import Image


class Service(TimeStampedMixin, UUIDMixin):
    """Модель для услуг"""
    name = models.CharField(verbose_name='Наименование услуги', max_length=256)
    description = models.TextField(verbose_name='Описание услуги', max_length=2048)
    photo = models.ImageField(verbose_name='Фото услуги', upload_to='services/photo/')

    class Meta:
        verbose_name = 'Услуга'
        verbose_name_plural = 'Услуги'
        ordering = ('created',)

    def __str__(self):
        return self.name


class ServiceBlock(TimeStampedMixin, UUIDMixin):
    """Модель блока услуги"""
    text = models.TextField(verbose_name='Текст блока услуги')
    service = models.ForeignKey(
        Service, verbose_name='Услуга', on_delete=models.CASCADE, related_name='blocks_of_services'
    )
    image = GenericRelation(Image, verbose_name='Фото блока услуги', related_query_name='service_blocks')

    class Meta:
        verbose_name = 'Блок услуги'
        verbose_name_plural = 'Блоги услуг'
        ordering = ('created',)

    def __str__(self):
        return 'Блок услуг'
