from django.db.models.signals import post_save
from django.dispatch import receiver
from apps.feedback.models import Feedback
from apps.feedback.tasks import notify_telegram_task, notify_email_task


@receiver(post_save, sender=Feedback)
def send_feedback_notification(sender, created, **kwargs):
    if created:
        notify_email_task.delay()
        notify_telegram_task.delay()
