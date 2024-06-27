from django.db.models.signals import post_save
from django.dispatch import receiver
from apps.feedback.models import Feedback
from apps.feedback.tasks import notify_telegram_task, notify_email_task


@receiver(post_save, sender=Feedback)
def send_feedback_notification(sender, instance, created, **kwargs):
    if created:
        message = (f'Создана новая запись обратной связи\n'
                   f'Имя: {instance.name}\nemail: {instance.email}\n'
                   f'Ссылка: {instance.link}\nФайл: {instance.file}\n'
                   f'Номер телефона: {instance.phone_number}')
        notify_email_task.apply_async(args=[message])
        notify_telegram_task.apply_async(args=[message])
