from apps.amenities.api.v1.views import AmenitiesDetailAPIView, AmenitiesListView
from django.urls import path


urlpatterns = [
    path('amenities/<uuid:pk>/', AmenitiesDetailAPIView.as_view(), name='service_detail'),
    path('amenities/', AmenitiesListView.as_view(), name='service_list')
]
