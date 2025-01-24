from django.urls import path
from apps.site_settings.api.v1.views import (
    ContactAPIView, AboutUsDetailView, AboutUsListView, MessangersAPIView, StatListView, StatDetailView, ReviewListView,
    ReviewDetailView, FavoriteCustomersListView, FavoriteCustomersDetailView
)


urlpatterns = [
    path('site_settings/contacts/', ContactAPIView.as_view(), name='contacts'),
    path('site_settings/about_us/', AboutUsListView.as_view(), name='about_us_list'),
    path('site_settings/about_us/<uuid:pk>/', AboutUsDetailView.as_view(), name='about_us_detail'),
    path('site_settings/messangers/', MessangersAPIView.as_view(), name='messangers'),
    path('site_settings/stat/', StatListView.as_view(), name='stat_list'),
    path('site_settings/stat/<uuid:pk>/', StatDetailView.as_view(), name='stat_detail'),
    path('site_settings/review/', ReviewListView.as_view(), name='review_list'),
    path('site_settings/review/<uuid:pk>/', ReviewDetailView.as_view(), name='review_detail'),
    path('site_settings/favorite_customers/', FavoriteCustomersListView.as_view(), name='favorite_customers_list'),
    path('site_settings/favorite_customers/<uuid:pk>/', FavoriteCustomersDetailView.as_view(),
         name='favorite_customers_detail'),
]
