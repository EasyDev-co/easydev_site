from django.contrib import admin
from apps.feedback.models import Feedback


@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
    list_display = ('pk', 'name', 'phone_number')
    search_fields = ('pk', 'name')
    ordering = ('pk', )
