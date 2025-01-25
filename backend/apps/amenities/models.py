from colorfield.fields import ColorField
from django.db import models

from apps.utils.models_mixins.models_mixins import UUIDMixin, TimeStampedMixin


class Amenities(TimeStampedMixin, UUIDMixin):
    """Модель для услуг"""
    name = models.CharField(verbose_name='Наименование услуги', max_length=256)
    description = models.TextField(verbose_name='Описание услуги', max_length=2048)
    photo = models.ImageField(verbose_name='Фото услуги', upload_to='amenities/photo/')
    video = models.FileField(verbose_name='Видео услуги', upload_to='amenities/video/', blank=True, null=True)
    gif = models.ImageField(verbose_name='GIF услуги', upload_to='amenities/GIF/', blank=True, null=True)
    text_and_label_color = ColorField(verbose_name='Цвет текста')
    link = models.URLField(verbose_name="Уникальная ссылка на телеграм", blank=True, null=True)

    class Meta:
        verbose_name = 'Услуга'
        verbose_name_plural = 'Услуги'
        ordering = ('created',)

    def __str__(self):
        return self.name


class Skill(TimeStampedMixin, UUIDMixin):
    """Модель для скиллов"""
    title = models.CharField(verbose_name='Заголовок скилла', max_length=256)
    description = models.CharField(verbose_name='Описание скилла', max_length=2048)
    amenities = models.ForeignKey(
        Amenities, verbose_name='Услуга', on_delete=models.CASCADE, related_name='skill_of_amenities'
    )

    class Meta:
        verbose_name = 'Скилл'
        verbose_name_plural = 'Скиллы'
        ordering = ('created',)

    def __str__(self):
        return self.title


class Technology(TimeStampedMixin, UUIDMixin):
    """Модель для технологий"""
    name = models.CharField(verbose_name='Название технологии', max_length=256)
    photo = models.ImageField(verbose_name='Фото технологии', upload_to='amenities/technology/photo')
    amenities = models.ForeignKey(
        Amenities, verbose_name='Услуга', on_delete=models.CASCADE, related_name='technology_of_amenities'
    )
    description = models.CharField(verbose_name='Описание технологии', max_length=2048)

    class Meta:
        verbose_name = 'Технология'
        verbose_name_plural = 'Технологии'
        ordering = ('created',)

    def __str__(self):
        return self.name


class MostPopularQuestion(TimeStampedMixin, UUIDMixin):
    title = models.CharField(verbose_name='Вопрос', max_length=256)
    description = models.CharField(verbose_name='Ответ на вопрос', max_length=2048)
    amenities = models.ForeignKey(
        Amenities, verbose_name='Услуга', on_delete=models.CASCADE, related_name='question_of_amenities'
    )

    class Meta:
        verbose_name = 'Часто задаваемый вопрос'
        verbose_name_plural = 'Часто задаваемые вопросы'
        ordering = ('created',)

    def __str__(self):
        return self.title
