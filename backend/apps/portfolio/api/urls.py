from django.urls import path, include


urlpatterns = [
    path('v1/', include("apps.portfolio.api.v1.urls")),
]
