from django.contrib import admin
from django.contrib.contenttypes.admin import GenericTabularInline
from django.utils.html import format_html

from apps.service.models import Service, ServiceBlock
from apps.news.admin import ImageInline


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    """AdminView для услуг"""
    list_display = ('pk', 'name', 'description_short', 'photo')
    search_fields = ('pk', 'name', 'description')
    fieldsets = [
        (None, {
            'fields': (
                'name', 'description', 'photo', 'preview',
            ),
        }),
    ]

    readonly_fields = ('preview',)

    def preview(self, obj):
        if obj.photo:
            return format_html('<img src="{}" style="max-width:200px; max-height:200"/>'.format(obj.photo.url))
        return 'No photo'

    def description_short(self, obj):
        if len(obj.description) < 50:
            return obj.description
        return obj.description[:50] + '...'

    description_short.short_description = 'description'


@admin.register(ServiceBlock)
class ServiceBlockAdmin(admin.ModelAdmin):
    inlines = (ImageInline, )
    list_display = ('pk', 'text_short', 'service')
    search_fields = ('pk', 'text')
    fieldsets = [
        (None, {
            'fields': ('text', 'service')
        })
    ]

    def text_short(self, obj):
        if len(obj.text) < 50:
            return obj.text
        return obj.text[:50] + '...'

    text_short.short_description = 'text'
