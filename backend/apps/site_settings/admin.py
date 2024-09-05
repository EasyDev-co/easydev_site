from django.contrib import admin
from django.utils.html import format_html
from apps.site_settings.models import Contact, AboutUs, Messangers, Stat
from apps.utils.admin_mixins.admins_mixins import SingletonModelAdmin


@admin.register(Contact)
class ContactAdmin(SingletonModelAdmin):
    """AdminView для контактов главной страницы"""


@admin.register(AboutUs)
class AboutUsAdmin(admin.ModelAdmin):
    """AdminView для раздела 'О нас' главной страницы"""
    list_display = ('pk', 'post', 'telegram', 'photo')
    search_fields = ('pk', 'post')
    fieldsets = [
        (None, {
            'fields': (
                'post', 'telegram', 'photo', 'preview',
            ),
        }),
    ]

    readonly_fields = ('preview',)

    def preview(self, obj):
        if obj.photo:
            return format_html('<img src="{}" style="max-width:200px; max-height:200"/>'.format(obj.photo.url))
        return 'No photo'


@admin.register(Messangers)
class MessangersAdmin(SingletonModelAdmin):
    """AdminView для раздела 'Мессенджеры' главной страницы"""


@admin.register(Stat)
class StatAdmin(admin.ModelAdmin):
    """AdminView для статистики главной страницы"""
    list_display = ('pk', 'how_much_done', 'what_done')
    search_fields = ('pk', 'what_done')


