from django.urls import path, include


urlpatterns = [
    path('v1/', include("apps.vacancy.api.v1.urls")),
]
