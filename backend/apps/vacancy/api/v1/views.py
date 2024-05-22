from django.http import Http404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.vacancy.models import Vacancy
from apps.vacancy.api.v1.serializer import VacancySerializer, VacancyFormSerializer


class VacancyAPIView(APIView):
    """View для получения списка вакансий"""
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)


class VacancyDetailAPIView(APIView):
    """Представление для детального просмотра вакансии"""

    def get_object(self, pk):
        try:
            return Vacancy.objects.get(pk=pk)
        except Vacancy.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        vacancy = self.get_object(pk)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        vacancy = self.get_object(pk)
        serializer = VacancySerializer(vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        vacancy = self.get_object(pk)
        vacancy.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class VacancyFormCreateView(APIView):
    def post(self, request):
        serializer = VacancyFormSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
