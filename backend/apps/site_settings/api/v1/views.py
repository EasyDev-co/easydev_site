from rest_framework.response import Response
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.views import APIView

from apps.site_settings.models import Contact, AboutUs, Messangers, Stat, Review, FavoriteCustomers
from apps.site_settings.api.v1.serializers import (
    ContactSerializer, AboutUsSerializer, MessangersSerializer, StatSerializer,
    ReviewSerializer, FavoriteCustomersSerializer
)


class ContactAPIView(APIView):
    def get(self, request):
        contacts = Contact.load()
        serializer = ContactSerializer(contacts)
        return Response(serializer.data)


class AboutUsListView(ListAPIView):
    """Представление списка для раздела 'О нас' на главной странице"""
    queryset = AboutUs.objects.all()
    serializer_class = AboutUsSerializer


class AboutUsDetailView(RetrieveAPIView):
    """Детальное представление для раздела 'О нас' на главной странице"""
    queryset = AboutUs.objects.all()
    serializer_class = AboutUsSerializer


class MessangersAPIView(APIView):
    def get(self, request):
        messangers = Messangers.load()
        serializer = MessangersSerializer(messangers)
        return Response(serializer.data)


class StatListView(ListAPIView):
    """Представление списка для раздела статистики на главной странице"""
    queryset = Stat.objects.all()
    serializer_class = StatSerializer


class StatDetailView(RetrieveAPIView):
    """Детальное представление для раздела статистики на главной странице"""
    queryset = Stat.objects.all()
    serializer_class = StatSerializer


class ReviewListView(ListAPIView):
    """Представление списка отзывов"""
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer


class ReviewDetailView(RetrieveAPIView):
    """Детальное представление отзывов"""
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer


class FavoriteCustomersListView(ListAPIView):
    """Представление списка любимых заказчиков"""
    queryset = FavoriteCustomers.objects.all()
    serializer_class = FavoriteCustomersSerializer


class FavoriteCustomersDetailView(RetrieveAPIView):
    """Детальное представление любимых заказчиков"""
    queryset = FavoriteCustomers.objects.all()
    serializer_class = FavoriteCustomersSerializer
