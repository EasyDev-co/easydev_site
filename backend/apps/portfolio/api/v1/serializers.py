from rest_framework import serializers

from apps.portfolio.models import Portfolio
from apps.news.api.v1.serializers import ImageSerializer


class PortfolioSerializer(serializers.ModelSerializer):
    """Сериалайзер для кейсов"""
    images = ImageSerializer(many=True, read_only=True)

    class Meta:
        model = Portfolio
        fields = (
            'pk', 'client', 'name', 'description', 'decision',
            'technology_stack', 'task', 'images', 'video', 'gif',
        )
