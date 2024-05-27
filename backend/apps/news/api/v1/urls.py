from apps.news.api.v1.views import NewsDetailAPIView, NewsListView
from django.urls import path


urlpatterns = [
    path('news/<int:pk>/', NewsDetailAPIView.as_view(), name='news_detail'),
    path('news/', NewsListView.as_view(), name='news_list')
]
