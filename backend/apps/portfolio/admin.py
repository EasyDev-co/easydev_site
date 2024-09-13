from django.contrib import admin
from django.utils.html import format_html

from apps.portfolio.models import Portfolio
from apps.news.admin import ImageInline


@admin.register(Portfolio)
class PortfolioAdmin(admin.ModelAdmin):
    """AdminView для портфолио"""
    inlines = (ImageInline,)
    list_display = (
        'pk', 'client', 'name', 'description_short', 'decision_short', 'task'
    )
    search_fields = ('pk', 'client', 'name')
    fieldsets = [
        (None, {
            'fields': (
                'client', 'name', 'description', 'decision', 'technology_stack', 'task'
            ),
        }),
        ('Изображения', {
            'fields': ('video', 'video_preview', 'gif', 'gif_preview'),
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

    def decision_short(self, obj):
        if len(obj.decision) < 50:
            return obj.decision
        return obj.decision[:50] + '...'

    decision_short.short_description = 'decision'

    def task_short(self, obj):
        if len(obj.task) < 50:
            return obj.task
        return obj.task[:50] + '...'

    task_short.short_description = 'task'
