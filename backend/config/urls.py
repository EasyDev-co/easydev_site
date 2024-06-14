from django.urls import path, include
from django.contrib import admin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('apps.news.api.urls')),
    path('api/', include('apps.vacancy.api.urls')),
]
