from rest_framework.generics import CreateAPIView
from apps.vacancy.models import Vacancy, VacancyForm
from apps.vacancy.api.v1.serializer import VacancySerializer, VacancyFormSerializer
from rest_framework.viewsets import ModelViewSet


class VacancyViewSet(ModelViewSet):
    queryset = Vacancy.objects.filter(is_active=True).all()
    serializer_class = VacancySerializer


class VacancyFormCreateView(CreateAPIView):
    queryset = VacancyForm.objects.all()
    serializer_class = VacancyFormSerializer
