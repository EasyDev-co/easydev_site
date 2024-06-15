from django.db import models
from apps.utils.models_mixins.models_mixins import FeedbackAbstract


class Feedback(FeedbackAbstract):
    """Модель для обратной связи"""
    phone_number = models.CharField(verbose_name='Номер телефона', max_length=15)

    class Meta:
        verbose_name = 'Обратная  связь'
        verbose_name_plural = 'Обратная связь'

    def __str__(self):
        return self.name
