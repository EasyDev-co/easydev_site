from rest_framework.generics import CreateAPIView
from apps.feedback.api.v1.serializers import FeedbackSerializer
from apps.feedback.models import Feedback


class FeedbackCreateAPIView(CreateAPIView):
    """Представление для создания заявки обратной связи"""
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
