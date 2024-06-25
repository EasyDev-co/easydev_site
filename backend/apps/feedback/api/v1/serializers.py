from rest_framework import serializers
from apps.feedback.models import Feedback


class FeedbackSerializer(serializers.ModelSerializer):
    """Сериалайзер для модели обратной связи"""

    class Meta:
        model = Feedback
        fields = '__all__'
