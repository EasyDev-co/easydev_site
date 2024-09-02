from rest_framework.generics import ListAPIView, RetrieveAPIView
from apps.portfolio.api.v1.serializers import PortfolioSerializer
from apps.portfolio.models import Portfolio


class PortfolioDetailAPIView(RetrieveAPIView):
    """Представление для детального просмотра кейсов"""
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer


class PortfolioListView(ListAPIView):
    """Представление для просмотра списка кейсов"""
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer
