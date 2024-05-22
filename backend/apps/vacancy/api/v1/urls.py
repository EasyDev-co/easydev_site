from django.urls import path
from apps.vacancy.api.v1.views import VacancyAPIView, VacancyDetailAPIView, VacancyFormCreateView


urlpatterns = [
    path('vacancies/', VacancyAPIView.as_view(), name='vacancies_list'),
    path('vacancies/<int:pk>/', VacancyDetailAPIView.as_view(), name='vacancy_detail'),
    path('vacancy_form/', VacancyFormCreateView.as_view(), name='vacancy_create'),
]
