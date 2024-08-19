from rest_framework import serializers

from apps.portfolio.models import Portfolio
from apps.news.api.v1.serializers import ImageSerializer


class PortfolioSerializer(serializers.ModelSerializer):
    """Сериалайзер для кейсов"""
    images = ImageSerializer(many=True, read_only=True)

    class Meta:
        model = Portfolio
        fields = (
            'pk', 'name', 'description', 'team', 'images', 'video', 'gif',
            'job_description', 'solved_problems', 'technology_stack', 'is_active'
        )
