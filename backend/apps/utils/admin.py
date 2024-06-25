from django.contrib import admin
from django.utils.html import format_html

from apps.utils.universal_models.universal_models import CustomUser
from apps.utils.universal_models.universal_models import Image


@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    """AdminView для модели кастомного пользователя"""
    list_display = (
        'pk', 'username', 'first_name', 'email', 'tg_notification_agreement',
        'email_notification_agreement', 'tg_user_id'
    )
    search_fields = ('pk', 'username', 'first_name', 'email')
    fieldsets = [
        ('Основная информация', {
            'fields': ('username', 'first_name', 'last_name',),
        }),
        ('Дополнительная информация', {
            'fields': ('is_staff', 'is_active', 'date_joined', 'last_login',),
        }),
        ('Информация для нотификации', {
            'fields': ('email', 'tg_user_id', 'email_notification_agreement', 'tg_notification_agreement',),
        }),
    ]


@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    """AdminView для фотографий новостей"""
    list_display = ('pk', 'image', 'content_type', 'object_id', 'related_object')
    search_fields = ('pk', 'object_id')
    fieldsets = [
        (None, {
            'fields': (
                'image', 'preview', 'content_type', 'object_id'
            )
        })
    ]

    readonly_fields = ('preview', )

    def preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="max-width:200px; max-height:200"/>'.format(obj.image.url))
        return 'No image'

    def related_object(self, obj):
        return obj.content_object
    related_object.short_description = 'Related Object'
