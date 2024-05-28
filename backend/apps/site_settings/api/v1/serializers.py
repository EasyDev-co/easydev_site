from rest_framework import serializers
from apps.site_settings.models import MainPageSettings


class MainPageSettingsSerializer(serializers.ModelSerializer):
    """Сериалайзер для настроек главной страницы"""

    class Meta:
        model = MainPageSettings
        fields = '__all__'
