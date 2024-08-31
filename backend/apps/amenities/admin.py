from django.contrib import admin
from django.contrib.contenttypes.admin import GenericTabularInline
from django.utils.html import format_html

from apps.amenities.models import Amenities, AmenitiesBlock
from apps.news.admin import ImageInline


@admin.register(Amenities)
class AmenitiesAdmin(admin.ModelAdmin):
    """AdminView для услуг"""
    list_display = ('pk', 'name', 'description_short', 'photo')
    search_fields = ('pk', 'name', 'description')
    fieldsets = [
        (None, {
            'fields': (
                'name', 'description', 'photo', 'photo_preview',
                'video', 'video_preview', 'gif', 'gif_preview',
            ),
        }),
    ]

    readonly_fields = ('photo_preview', 'video_preview', 'gif_preview')

    def photo_preview(self, obj):
        if obj.photo:
            return format_html('<img src="{}" style="max-width:200px; max-height:200"/>'.format(obj.photo.url))
        return 'No photo'

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


@admin.register(AmenitiesBlock)
class AmenitiesBlockAdmin(admin.ModelAdmin):
    inlines = (ImageInline, )
    list_display = ('pk', 'text_short', 'amenities')
    search_fields = ('pk', 'text')
    fieldsets = [
        (None, {
            'fields': ('text', 'amenities'),
        }),
    ]

    def text_short(self, obj):
        if len(obj.text) < 50:
            return obj.text
        return obj.text[:50] + '...'

    text_short.short_description = 'text'
