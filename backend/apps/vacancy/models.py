from django.core.exceptions import ValidationError
from django.db import models
from apps.utils.models_mixins.models_mixins import VacancyAbstract
from apps.utils.models_mixins.models_mixins import UUIDMixin, TimeStampedMixin


class Vacancy(TimeStampedMixin, UUIDMixin):
    """Модель для вакансий"""
    title = models.CharField(verbose_name='Заголовок', max_length=256)
    post = models.CharField(verbose_name='Должность', max_length=256)
    description = models.TextField(verbose_name='Описание вакансии', max_length=1024)
    salary_fork_lt = models.PositiveIntegerField(
        verbose_name='Нижняя граница зарлатной вилки', blank=True, null=True
    )
    salary_fork_gt = models.PositiveIntegerField(
        verbose_name='Верхняя граница зарлатной вилки', blank=True, null=True
    )
    image = models.ImageField(verbose_name='Фотография вакансии', upload_to='vacancies/image')

    class Meta:
        verbose_name = 'Вакансия'
        verbose_name_plural = 'Вакансии'
        ordering = ('title',)

    def __str__(self):
        return 'Вакансия'

    def clean(self):
        super().clean()
        if self.salary_fork_lt and self.salary_fork_gt:
            if self.salary_fork_lt > self.salary_fork_gt:
                raise ValidationError({
                    'salary_fork_lt': 'Нижняя граница зарплатной вилки не может быть выше верхней границы.'
                })


class VacancyForm(VacancyAbstract, TimeStampedMixin, UUIDMixin):
    """Модель для формы записи на вакансию"""
    class Meta:
        verbose_name = 'Форма вакансии'
        verbose_name_plural = 'Формы вакансий'
        ordering = ('name',)

    def __str__(self):
        return self.name
