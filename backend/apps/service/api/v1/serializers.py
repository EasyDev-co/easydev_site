from rest_framework import serializers
from apps.service.models import Service, ServiceBlock
from apps.utils.universal_models.universal_models import Image
from apps.news.api.v1.serializers import ImageSerializer


class ServiceBlockSerializer(serializers.ModelSerializer):
    """Сериалайзер для дополнительной модели блока услуг"""
    image = ImageSerializer(many=True, read_only=True)

    class Meta:
        model = ServiceBlock
        fields = ('text', 'news', 'image')


class ServiceDetailSerializer(serializers.ModelSerializer):
    """Сериалайзер для детального просмотра основной модели услуг"""
    block_of_services = ServiceBlockSerializer(many=True, read_only=True)

    class Meta:
        model = Service
        fields = ('name', 'description', 'photo', 'block_of_services')


class ServiceSerializer(serializers.ModelSerializer):
    """Сериалайзер для основной модели услуг"""

    class Meta:
        model = Service
        fields = '__all__'

