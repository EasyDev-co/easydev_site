from rest_framework import serializers
from apps.vacancy.models import Vacancy, VacancyForm


class VacancySerializer(serializers.ModelSerializer):
    """Сериалайзер для вакансий"""
    class Meta:
        model = Vacancy
        fields = '__all__'


class VacancyFormSerializer(serializers.Serializer):
    """Сериалайзер для формы вакансий"""
    class Meta:
        model = VacancyForm
        fields = '__all__'
