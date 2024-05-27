from django.urls import path, include
from rest_framework.routers import DefaultRouter
from apps.vacancy.api.v1.views import VacancyViewSet, VacancyFormCreateView


vacancy_router = DefaultRouter()
vacancy_router.register('vacancy', VacancyViewSet)


urlpatterns = [
    path('', include(vacancy_router.urls)),
    path('vacancy_form/', VacancyFormCreateView.as_view(), name='vacancy_form')
]
