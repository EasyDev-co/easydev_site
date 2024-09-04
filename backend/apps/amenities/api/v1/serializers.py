from rest_framework import serializers
from apps.amenities.models import Amenities, Skill, Technology


class TechnologySerializer(serializers.ModelSerializer):
    """Сериалайзер для технологий"""

    class Meta:
        model = Technology
        fields = '__all__'


class SkillSerializer(serializers.ModelSerializer):
    """Сериалайзер для скиллов"""

    class Meta:
        model = Skill
        fields = '__all__'


class AmenitiesDetailSerializer(serializers.ModelSerializer):
    """Сериалайзер для детального просмотра основной модели услуг"""
    technology_of_amenities = TechnologySerializer(many=True, read_only=True)
    skill_of_amenities = SkillSerializer(many=True, read_only=True)

    class Meta:
        model = Amenities
        fields = ('name', 'description', 'photo', 'technology_of_amenities', 'skill_of_amenities')


class AmenitiesSerializer(serializers.ModelSerializer):
    """Сериалайзер для основной модели услуг"""

    class Meta:
        model = Amenities
        fields = '__all__'

