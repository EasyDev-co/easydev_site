from django.urls import path
from apps.feedback.api.v1.views import FeedbackCreateAPIView


urlpatterns = [
    path('feedback_form/', FeedbackCreateAPIView.as_view(), name='feedback_form_create'),
]
