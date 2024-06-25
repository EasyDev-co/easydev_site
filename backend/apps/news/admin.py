from django.contrib import admin
from django.contrib.contenttypes.admin import GenericTabularInline
from django.utils.html import format_html

from apps.news.models import News, BlockOfNews
from apps.utils.universal_models.universal_models import Image


class ImageInline(GenericTabularInline):
    model = Image


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    """AdminView для новостей"""
    list_display = ('pk', 'name', 'description_short', 'photo')
    search_fields = ('pk', 'name', 'description')
    fieldsets = [
        (None, {
            'fields': (
                'name', 'description', 'photo', 'preview',
            ),
        }),
    ]

    readonly_fields = ('preview', )

    def preview(self, obj):
        if obj.photo:
            return format_html('<img src="{}" style="max-width:200px; max-height:200"/>'.format(obj.photo.url))
        return 'No photo'

    def description_short(self, obj):
        if len(obj.description) < 50:
            return obj.description
        return obj.description[:50] + '...'

    description_short.short_description = 'description'


@admin.register(BlockOfNews)
class BlockOfNewsAdmin(admin.ModelAdmin):
    """AdminView для блоков новостей"""
    inlines = (ImageInline, )
    list_display = ('pk', 'name', 'text_short', 'news')
    search_fields = ('pk', 'name', 'text')
    fieldsets = [
        (None, {
            'fields': ('name', 'text', 'news')
        })
    ]

    def text_short(self, obj):
        if len(obj.text) < 50:
            return obj.text
        return obj.text[:50] + '...'

    text_short.short_description = 'text'
