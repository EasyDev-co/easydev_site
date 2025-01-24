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
    name = models.CharField(verbose_name='Имя сотрудника', max_length=256)
    lastname = models.CharField(verbose_name='Фамилия сотрудника', max_length=256)
    post = models.CharField(verbose_name='Должность', max_length=256)
    telegram = models.CharField(verbose_name='Ссылка на телеграм', max_length=256)
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
        ordering = ('created',)

    def __str__(self):
        return 'Статистика'


class Review(TimeStampedMixin, UUIDMixin):
    """Модель отзывов"""
    company = models.CharField(verbose_name='Компания', max_length=256)
    post = models.CharField(verbose_name='Должность', max_length=256)
    name = models.CharField(verbose_name='Имя', max_length=256)
    lastname = models.CharField(verbose_name='Фамилия', max_length=256)
    review = models.TextField(verbose_name='Отзыв', max_length=4096)
    logo = models.ImageField(verbose_name='Логотип', upload_to='site_settings/reviews/logo')
    photo = models.ImageField(verbose_name='Фото', upload_to='site_settings/reviews/photo')

    class Meta:
        verbose_name = 'Отзыв'
        verbose_name_plural = 'Отзывы'
        ordering = ('created',)

    def __str__(self):
        return self.company


class FavoriteCustomers(TimeStampedMixin, UUIDMixin):
    """Модель любимых клиентов"""
    company = models.CharField(verbose_name='Компания', max_length=256)
    logo = models.ImageField(verbose_name='Логотип', upload_to='site_settings/favourite_customers/logo')

    class Meta:
        verbose_name = 'Любимый пользователь'
        verbose_name_plural = 'Любимые пользователи'
        ordering = ('created',)

    def __str__(self):
        return self.company
