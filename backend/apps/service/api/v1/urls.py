from apps.service.api.v1.views import ServiceDetailAPIView, ServiceListView
from django.urls import path


urlpatterns = [
    path('service/<uuid:pk>/', ServiceDetailAPIView.as_view(), name='service_detail'),
    path('service/', ServiceListView.as_view(), name='service_list')
]
