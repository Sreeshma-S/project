from django.urls import path, re_path
from . import views
from .views import *


urlpatterns = [
    path('', views.home, name = "home"),
    # path('media', views.media, name='media'),
]
