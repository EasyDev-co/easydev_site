from rest_framework import serializers
from apps.site_settings.models import Contact, AboutUs, Messangers, Stat, Review, FavoriteCustomers


class ContactSerializer(serializers.ModelSerializer):
    """Сериалайзер для модели контактов"""

    class Meta:
        model = Contact
        fields = '__all__'


class AboutUsSerializer(serializers.ModelSerializer):
    """Сериалайзер для модели 'О нас'"""

    class Meta:
        model = AboutUs
        fields = '__all__'


class MessangersSerializer(serializers.ModelSerializer):
    """Сериалайзер для модели месенджеров"""

    class Meta:
        model = Messangers
        fields = '__all__'

class StatSerializer(serializers.ModelSerializer):
    """Сериалайзер для модели статистики"""

    class Meta:
        model = Stat
        fields = '__all__'


class ReviewSerializer(serializers.ModelSerializer):
    """Сериалайзер для модели отзывов"""

    class Meta:
        model = Review
        fields = '__all__'


class FavoriteCustomersSerializer(serializers.ModelSerializer):
    """Сериалайзер для модели любимых клиентов"""

    class Meta:
        model = FavoriteCustomers
        fields = '__all__'
