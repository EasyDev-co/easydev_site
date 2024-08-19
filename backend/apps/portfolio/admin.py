from django.contrib import admin
from django.utils.html import format_html

from apps.portfolio.models import Portfolio
from apps.news.admin import ImageInline


@admin.register(Portfolio)
class PortfolioAdmin(admin.ModelAdmin):
    """AdminView для портфолио"""
    inlines = (ImageInline, )
    list_display = ('pk', 'name', 'description_short', 'is_active')
    search_fields = ('pk', 'name', 'description')
    fieldsets = [
        ('Общая информация', {
            'fields': ('name', 'description', 'team',),
        }),
        ('Изображения', {
            'fields': ('video', 'video_preview', 'gif', 'gif_preview')
        }),
        ('Информация о проекте', {
            'fields': ('job_description', 'solved_problems', 'technology_stack', 'is_active')
        }),
    ]

    readonly_fields = ('video_preview', 'gif_preview')

    def video_preview(self, obj):
        if obj.video:
            return format_html(
                '<video width="200" height="200" controls>'
                '<source src="{}" type="video/mp4">'
                'Your browser does not support the video tag.'
                '</video>',
                obj.video.url
            )
        return "No video"

    def gif_preview(self, obj):
        if obj.gif:
            return format_html(
                '<img src="{}" width="200" height="200" />',
                obj.gif.url
            )
        return "No GIF"

    def description_short(self, obj):
        if len(obj.description) < 50:
            return obj.description
        return obj.description[:50] + '...'

    description_short.short_description = 'description'
