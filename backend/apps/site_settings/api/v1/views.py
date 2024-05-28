from rest_framework.response import Response
from rest_framework.views import APIView

from apps.site_settings.models import MainPageSettings
from apps.site_settings.api.v1.serializers import MainPageSettingsSerializer


class MainPageSettingsAPIView(APIView):
    def get(self, request):
        settings = MainPageSettings.objects.first()
        serializer = MainPageSettingsSerializer(settings)
        return Response(serializer.data)
