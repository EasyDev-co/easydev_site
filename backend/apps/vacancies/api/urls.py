from django.urls import path, include


urlpatterns = [
    path('v1/', include("apps.vacancies.api.v1.urls")),
]
