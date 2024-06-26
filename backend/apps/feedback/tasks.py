import requests
from time import sleep

from django.core.mail import send_mail, BadHeaderError
from rest_framework.response import Response
from rest_framework import status

from config.celery import BaseTask, app
from config.settings import NOTIFY_BOT_TOKEN
from apps.utils.universal_models.universal_models import CustomUser


class NotifyTelegramTask(BaseTask):
    """Задача для телеграм нотификации"""

    def process(self, *args, **kwargs):
        for user in CustomUser.objects.filter(tg_notification_agreement=True).iterator():
            self.send_telegram_message(user.tg_user_id, "ПРИВЕТ")

    def send_telegram_message(self, chat_id, text):
        messages_per_minute = 3200
        delay = 60 / messages_per_minute
        url = f"https://api.telegram.org/bot{NOTIFY_BOT_TOKEN}/sendMessage"
        payload = {
            'chat_id': chat_id,
            'text': text
        }
        response = requests.post(url, data=payload)
        response.raise_for_status()
        sleep(delay)


class NotifyEmailTask(BaseTask):
    """Задача для email нотификации"""
    def process(self, *args, **kwargs):
        for user in CustomUser.objects.filter(tg_notification_agreement=True).iterator():
            self.send_email_message(user.email, "ПРИВЕТ")

    def send_email_message(self, email, text):
        try:
            send_mail('EasyDev', text, None, [email])
            response_message = {
                "success": f"Сообщение доставлено"
            }
            response_status = status.HTTP_200_OK
        except BadHeaderError:
            response_message = {
                "error": "Невозможно отправить письмо. Заголовок содержит недопустимые символы."
            }
            response_status = status.HTTP_400_BAD_REQUEST
        except Exception as exception:
            response_message = {
                "error": f"Произошла ошибка при отправке письма: {str(exception)}"
            }
            response_status = status.HTTP_500_INTERNAL_SERVER_ERROR

        return Response(response_message, status=response_status)


notify_telegram_task = app.register_task(NotifyTelegramTask())
notify_email_task = app.register_task(NotifyEmailTask())
