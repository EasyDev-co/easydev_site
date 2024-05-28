from django.db import models
from apps.utils.models_mixins.models_mixins import SingletonModelMixin, UUIDMixin


class MainPageSettings(SingletonModelMixin, UUIDMixin):
    """Модель главных настроек страницы"""
    number = models.CharField(verbose_name='Номер телефона', default='8-800-555-3535')
    email = models.EmailField(verbose_name='Электронная почта', default='admin@admin.com')
    telegram = models.CharField(verbose_name='Телеграм', default='@admin')
    user_agreement_link = models.URLField(
        verbose_name='Ссылка на пользовательское соглашение', default=''
    )
    privacy_policy_link = models.URLField(
        verbose_name='Ссылка на политику конфиденциальности', default=''
    )
    about_us = models.TextField(verbose_name='О нас', default='about us')
    why_us = models.TextField(verbose_name='Почему именно мы', default='Why us specifically')

    class Meta:
        verbose_name = 'Настройка главной страницы'
        verbose_name_plural = 'Настрийки главной страницы'

    def __str__(self):
        return 'Главная страница'
