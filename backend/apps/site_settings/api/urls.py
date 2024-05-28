from django.urls import path, include


urlpatterns = [
    path('v1/', include("apps.site_settings.api.v1.urls")),
]
