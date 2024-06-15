from django.contrib.contenttypes.fields import GenericRelation
from django.db import models

from apps.utils.models_mixins.models_mixins import UUIDMixin, TimeStampedMixin
from apps.utils.universal_models.universal_models import Image


def image_directory_path(instance: 'Image', filename: str) -> str:
    """Функция для построения пути для модели изображений"""
    return 'images/content_type_{ct_id}/object_{obj_id}/{filename}'.format(
        ct_id=instance.content_type.id,
        obj_id=instance.object_id,
        filename=filename,
    )


class News(TimeStampedMixin, UUIDMixin):
    """Основная модель новости"""
    name = models.CharField(verbose_name='Название новости', max_length=256)
    description = models.TextField(verbose_name='Краткое описание новости', max_length=1024)
    photo = models.ImageField(verbose_name='Фото новости', upload_to='news/photo/')

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'
        ordering = ('name',)

    def __str__(self):
        return self.name


class BlockOfNews(TimeStampedMixin, UUIDMixin):
    """Дополнительная модель блока новости"""
    name = models.CharField(verbose_name='Название блока новости', max_length=256, blank=True, null=True)
    text = models.TextField(verbose_name='Текст блока новости')
    news = models.ForeignKey(News, verbose_name='Новость', on_delete=models.CASCADE, related_name='blocks_of_news')
    image = GenericRelation(Image, verbose_name='Фото блока новости', related_query_name='news_blocks')

    class Meta:
        verbose_name = 'Блок новости'
        verbose_name_plural = 'Блоки новостей'
        ordering = ('name',)

    def __str__(self):
        return self.name

