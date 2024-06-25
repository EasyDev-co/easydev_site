import requests

from django.core.mail import send_mail, BadHeaderError
from rest_framework.response import Response
from rest_framework import status

from config.celery import BaseTask, app
from config.settings import NOTIFY_BOT_TOKEN
from apps.utils.universal_models.universal_models import CustomUser


class NotifyTelegramTask(BaseTask):
    """Задача для телеграм нотификации"""

    def process(self, *args, **kwargs):
        users = CustomUser.objects.filter(tg_notification_agreement=True)
        for user in users:
            self.send_telegram_message(user.tg_user_id, "ПРИВЕТ")

    def send_telegram_message(self, chat_id, text):
        token = NOTIFY_BOT_TOKEN
        url = f"https://api.telegram.org/bot{token}/sendMessage"
        payload = {
            'chat_id': chat_id,
            'text': text
        }
        response = requests.post(url, data=payload)
        if not response.ok:
            raise Exception(f"Failed to send message: {response.text}")


class NotifyEmailTask(BaseTask):
    """Задача для email нотификации"""
    def process(self, *args, **kwargs):
        users = CustomUser.objects.filter(email_notification_agreement=True)
        for user in users:
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
