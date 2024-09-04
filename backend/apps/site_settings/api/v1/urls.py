from django.urls import path
from apps.site_settings.api.v1.views import (
    ContactAPIView, AboutUsDetailView, AboutUsListView, MessangersAPIView, StatListView, StatDetailView
)


urlpatterns = [
    path('site_settings/contacts/', ContactAPIView.as_view(), name='contacts'),
    path('site_settings/about_us/', AboutUsListView.as_view(), name='about_us_list'),
    path('site_settings/about_us/<uuid:pk>/', AboutUsDetailView.as_view(), name='about_us_detail'),
    path('site_settings/messangers/', MessangersAPIView.as_view(), name='messangers'),
    path('site_settings/stat/', StatListView.as_view(), name='stat_list'),
    path('site_settings/stat/<uuid:pk>/', StatDetailView.as_view(), name='stat_detail'),
]
