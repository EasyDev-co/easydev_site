from rest_framework import serializers
from apps.amenities.models import Amenities, AmenitiesBlock
from apps.utils.universal_models.universal_models import Image
from apps.news.api.v1.serializers import ImageSerializer


class AmenitiesBlockSerializer(serializers.ModelSerializer):
    """Сериалайзер для дополнительной модели блока услуг"""
    image = ImageSerializer(many=True, read_only=True)

    class Meta:
        model = AmenitiesBlock
        fields = ('text', 'news', 'image')


class AmenitiesDetailSerializer(serializers.ModelSerializer):
    """Сериалайзер для детального просмотра основной модели услуг"""
    block_of_amenities = AmenitiesBlockSerializer(many=True, read_only=True)

    class Meta:
        model = Amenities
        fields = ('name', 'description', 'photo', 'block_of_amenities')


class AmenitiesSerializer(serializers.ModelSerializer):
    """Сериалайзер для основной модели услуг"""

    class Meta:
        model = Amenities
        fields = '__all__'

