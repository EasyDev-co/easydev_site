from django.contrib import admin
from django.utils.html import format_html

from apps.portfolio.models import Portfolio


@admin.register(Portfolio)
class PortfolioAdmin(admin.ModelAdmin):
    """AdminView для портфолио"""
    list_display = (
        'pk', 'client', 'name', 'description_short', 'decision_short', 'task'
    )
    search_fields = ('pk', 'client', 'name')
    fieldsets = [
        (None, {
            'fields': (
                'client', 'name', 'description', 'decision', 'technology_stack', 'task'
            )
        })
    ]

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
