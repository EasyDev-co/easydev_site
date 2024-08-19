from django.urls import path, include
from django.contrib import admin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('apps.news.api.urls')),
    path('api/', include('apps.vacancy.api.urls')),
    path('api/', include('apps.site_settings.api.urls')),
    path('api/', include('apps.amenities.api.urls')),
    path('api/', include('apps.feedback.api.urls')),
    path('api/', include('apps.portfolio.api.urls')),
]
