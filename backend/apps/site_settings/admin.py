from django.contrib import admin
from apps.site_settings.models import MainPageSettings
from apps.utils.admin_mixins.admins_mixins import SingletonModelAdmin


@admin.register(MainPageSettings)
class MainPageSettingsAdmin(SingletonModelAdmin):
    """AdminView для настроек главной страницы"""
    fieldsets = [
        ('Контактная информация', {
            'fields': (
                'number', 'email', 'telegram',
            ),
        }),
        ('Информация о компании', {
            'fields': (
                'user_agreement_link', 'privacy_policy_link', 'about_us', 'why_us',
            ),
        }),
    ]
