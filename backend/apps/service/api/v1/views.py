from rest_framework.generics import ListAPIView, RetrieveAPIView
from apps.service.api.v1.serializers import ServiceDetailSerializer, ServiceSerializer
from apps.service.models import Service


class ServiceDetailAPIView(RetrieveAPIView):
    """Представление для детального просмотра услуг"""
    queryset = Service.objects.prefetch_related('blocks_of_services').all()
    serializer_class = ServiceDetailSerializer


class ServiceListView(ListAPIView):
    """Представление для просмотра списка услуг"""
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
