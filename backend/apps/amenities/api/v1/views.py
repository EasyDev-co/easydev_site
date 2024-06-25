from rest_framework.generics import ListAPIView, RetrieveAPIView
from apps.amenities.api.v1.serializers import AmenitiesDetailSerializer, AmenitiesSerializer
from apps.amenities.models import Amenities


class AmenitiesDetailAPIView(RetrieveAPIView):
    """Представление для детального просмотра услуг"""
    queryset = Amenities.objects.prefetch_related('blocks_of_services').all()
    serializer_class = AmenitiesDetailSerializer


class AmenitiesListView(ListAPIView):
    """Представление для просмотра списка услуг"""
    queryset = Amenities.objects.all()
    serializer_class = AmenitiesSerializer
