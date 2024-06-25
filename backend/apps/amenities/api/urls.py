from django.urls import path, include


urlpatterns = [
    path('v1/', include("apps.amenities.api.v1.urls")),
]
