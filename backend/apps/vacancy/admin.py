from django.contrib import admin
from django.utils.html import format_html

from apps.vacancy.models import Vacancy, VacancyForm


@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin):
    list_display = ('pk', 'title', 'post', 'description_short', 'salary_fork', 'image')
    search_fields = ('pk', 'title', 'post')
    fieldsets = [
        (None, {
            'fields': (
                'title', 'post', 'salary_fork', 'image', 'preview',
            ),
        }),
    ]

    readonly_fields = ['preview',]

    def description_short(self, obj):
        if len(obj.description) < 50:
            return obj.description
        return obj.description[:50] + '...'

    description_short.short_description = 'description'

    def preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="max-width:200px; max-height:200"/>'.format(obj.image.url))
        return 'No image'


@admin.register(VacancyForm)
class VacancyFormAdmin(admin.ModelAdmin):
    pass

