from django.db import models
from django.db.models import URLField

from apps.utils.models_mixins.models_mixins import SingletonModelMixin, UUIDMixin, TimeStampedMixin


class Contact(SingletonModelMixin, UUIDMixin):
    """Модель контактов для главной страницы"""
    address = models.CharField(verbose_name='Адрес', max_length=256)
    phone_number = models.CharField(verbose_name='Номер телефона', max_length=24)
    telegram = models.URLField(verbose_name='Телеграм', max_length=256)
    email = models.EmailField(verbose_name='Почта', max_length=256)

    class Meta:
        verbose_name = 'Контакт'
        verbose_name_plural = 'Контакты'

    def __str__(self):
        return 'Контакты для главной страницы'


class AboutUs(TimeStampedMixin, UUIDMixin):
    """Модель для информации 'О Нас' для главной страницы"""
    post = models.CharField(verbose_name='Должность', max_length=256)
    telegram = models.URLField(verbose_name='Ссылка на телеграм', max_length=256)
    photo = models.ImageField(verbose_name='Фото сотрудника', upload_to='site_settings/about_us/photo')

    class Meta:
        verbose_name = 'О нас'
        verbose_name_plural = 'О нас'
        ordering = ('created',)

    def __str__(self):
        return 'О нас'


class Messangers(SingletonModelMixin, UUIDMixin):
    """Модель контактами в мессенджерах"""
    instagram = URLField(verbose_name='Инстаграм', max_length=256)
    vk = URLField(verbose_name='Вконтакте', max_length=256)
    telegram = URLField(verbose_name='Телеграм', max_length=256)
    whatsapp = URLField(verbose_name='Ватсап', max_length=256)

    class Meta:
        verbose_name = 'Мессенджер'
        verbose_name_plural = 'Мессенджеры'

    def __str__(self):
        return 'Мессенджер'


class Stat(TimeStampedMixin, UUIDMixin):
    """Модель для статистики на главной странице"""
    how_much_done = models.PositiveIntegerField(verbose_name='Сколько сделано')
    what_done = models.CharField(verbose_name='Что сделано', max_length=256)

    class Meta:
        verbose_name = 'Статистика'
        verbose_name_plural = 'Статистика'

    def __str__(self):
        return 'Статистика'
