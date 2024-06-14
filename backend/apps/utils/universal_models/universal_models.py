from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.db import models

from apps.utils.models_mixins.models_mixins import UUIDMixin, TimeStampedMixin


def image_directory_path(instance: 'Image', filename: str) -> str:
    """Функция для построения пути для модели изображений"""
    return 'images/content_type_{ct_id}/object_{obj_id}/{filename}'.format(
        ct_id=instance.content_type.id,
        obj_id=instance.object_id,
        filename=filename,
    )


class Image(TimeStampedMixin, UUIDMixin):
    """Универсальная модель фотографии"""
    image = models.ImageField(verbose_name='Фото', upload_to=image_directory_path)
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.UUIDField()
    content_object = GenericForeignKey('content_type', 'object_id')

    class Meta:
        verbose_name = 'Фотография'
        verbose_name_plural = 'Фотографии'
        app_label = 'utils'
        ordering = ('content_type',)

    def __str__(self):
        return 'Фотография'
