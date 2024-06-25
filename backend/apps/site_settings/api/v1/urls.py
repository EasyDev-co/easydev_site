from django.urls import path
from apps.site_settings.api.v1.views import MainPageSettingsAPIView


urlpatterns = [
    path('main_page', MainPageSettingsAPIView.as_view(), name='main_page_settings')
]
