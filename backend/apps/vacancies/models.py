from django.db import models


class Vacancy(models.Model):
    """Модель для вакансий"""
    title = models.CharField(verbose_name='Заголовок', max_length=256)
    post = models.CharField(verbose_name='Должность', max_length=256)
    description = models.TextField(verbose_name='Описание вакансии', max_length=512)
    salary_fork = models.PositiveIntegerField(
        verbose_name='Зарплатная вилка', blank=True, null=True
    )
    image = models.ImageField(verbose_name='Фотография вакансии', upload_to='vacancies/image')

    class Meta:
        verbose_name = 'Вакансия'
        verbose_name_plural = 'Вакансии'

    def __str__(self):
        return 'Вакансия'


class VacancyAbstract(models.Model):
    """Абстрактная модель, содержащая общие поля для работы с вакансиями"""
    name = models.CharField(verbose_name='Имя', max_length=256)
    number = models.IntegerField(verbose_name='Номер', max_length=15)
    link = models.URLField(verbose_name='Ссылка на социальную сеть', blank=True, null=True)
    file = models.FileField(verbose_name='Файл', upload_to='vacancies/files', blank=True, null=True)

    class Meta:
        abstract = True


class VacancyForm(VacancyAbstract):
    """Модель для формы записи на вакансию"""
    class Meta:
        verbose_name = 'Форма вакансии'
        verbose_name_plural = 'Формы вакансий'

    def __str__(self):
        return self.name
