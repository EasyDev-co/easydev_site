from rest_framework import serializers
from apps.news.models import News, BlockOfNews
from apps.utils.universal_models.universal_models import Image


class ImageSerializer(serializers.ModelSerializer):
    """Сериалайщер для модели с картинками"""

    class Meta:
        model = Image
        fields = ('image', )


class BlockOfNewsSerializer(serializers.ModelSerializer):
    """Сериалайзер для добольнительной модели блока новостей"""
    image = ImageSerializer(many=True, read_only=True)

    class Meta:
        model = BlockOfNews
        fields = ('name', 'text', 'news', 'image')


class NewsDetailSerializer(serializers.ModelSerializer):
    """Сериалайзер для детального просмотра основной модели новостей"""
    blocks_of_news = BlockOfNewsSerializer(many=True, read_only=True)

    class Meta:
        model = News
        fields = ('name', 'description', 'photo', 'blocks_of_news')


class NewsSerializer(serializers.ModelSerializer):
    """Сериалайзер для основной модели новостей"""

    class Meta:
        model = News
        fields = '__all__'
