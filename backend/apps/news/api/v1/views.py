from rest_framework.generics import ListAPIView, RetrieveAPIView
from apps.news.api.v1.serializers import NewsDetailSerializer, NewsSerializer
from apps.news.models import News


class NewsDetailAPIView(RetrieveAPIView):
    """Представление для детального просмотра новостей"""
    queryset = News.objects.prefetch_related('blocks_of_news').all()
    serializer_class = NewsDetailSerializer


class NewsListView(ListAPIView):
    """Представление для просмотра списка новостей"""
    queryset = News.objects.all()
    serializer_class = NewsSerializer
