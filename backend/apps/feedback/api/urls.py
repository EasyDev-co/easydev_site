from django.urls import path, include


urlpatterns = [
    path('v1/', include("apps.feedback.api.v1.urls")),
]
