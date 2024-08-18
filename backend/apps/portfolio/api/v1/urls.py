from apps.portfolio.api.v1.views import PortfolioListView, PortfolioDetailAPIView
from django.urls import path


urlpatterns = [
    path('portfolio/<uuid:pk>/', PortfolioDetailAPIView.as_view(), name='portfolio_detail'),
    path('portfolio/', PortfolioListView.as_view(), name='portfolio')
]
