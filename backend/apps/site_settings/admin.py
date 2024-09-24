from django.contrib import admin
from django.utils.html import format_html
from apps.site_settings.models import Contact, AboutUs, Messangers, Stat, Review, FavoriteCustomers
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


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    """AdminView для модели отзывов"""
    list_display = ('pk', 'company', 'post', 'name', 'lastname', 'review_short')
    search_fields = ('pk', 'company', 'name', 'lastname')
    fieldsets = [
        (None, {
            'fields': (
                'company', 'post', 'name', 'lastname', 'review', 'logo', 'logo_preview', 'photo', 'photo_preview',
            ),
        }),
    ]

    readonly_fields = ('photo_preview', 'logo_preview',)

    def photo_preview(self, obj):
        if obj.photo:
            return format_html('<img src="{}" style="max-width:200px; max-height:200"/>'.format(obj.photo.url))
        return 'No photo'

    def logo_preview(self, obj):
        if obj.photo:
            return format_html('<img src="{}" style="max-width:200px; max-height:200"/>'.format(obj.logo.url))
        return 'No logo'

    def review_short(self, obj):
        if len(obj.review) < 50:
            return obj.review
        return obj.review[:50] + '...'

    review_short.short_description = 'review'


@admin.register(FavoriteCustomers)
class FavoriteCustomersAdmin(admin.ModelAdmin):
    """AdminView для любимых клиентов"""
    list_display = ('pk', 'company', 'logo')
    search_fields = ('pk', 'company')
    fieldsets = [
        (None, {
            'fields': (
                'company', 'logo', 'logo_preview',
            ),
        }),
    ]

    readonly_fields = ('logo_preview',)

    def logo_preview(self, obj):
        if obj.photo:
            return format_html('<img src="{}" style="max-width:200px; max-height:200"/>'.format(obj.logo.url))
        return 'No logo'
