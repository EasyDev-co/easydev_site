from django.contrib import admin
from django.utils.html import format_html

from apps.amenities.models import Amenities, Skill, Technology


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


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    """AdminView для модели скиллов"""
    list_display = ('pk', 'title', 'description_short', 'amenities')
    search_fields = ('pk', 'title', 'description', 'amenities')
    fieldsets = [
        (None, {
            'fields': (
                'title', 'description', 'amenities',
            ),
        }),
    ]

    def description_short(self, obj):
        if len(obj.description) < 50:
            return obj.description
        return obj.description[:50] + '...'

    description_short.short_description = 'description'


@admin.register(Technology)
class TechnologyAdmin(admin.ModelAdmin):
    """AdminView для технологий"""
    list_display = ('pk', 'name', 'amenities', 'description_short', 'photo')
    search_fields = ('pk', 'name', 'amenities', 'description')
    fieldsets = [
        (None, {
            'fields': (
                'name', 'amenities', 'description', 'photo', 'preview'
            )
        })
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

