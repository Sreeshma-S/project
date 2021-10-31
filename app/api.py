# from rest_framework.generics import ListAPIView
#
# from .serializers import ListSerializer, CardSerializer
# from .models import List, Card
#
# class ListApi(ListAPIView):
#     queryset = List.objects.all()
#     serializer_class = ListSerializer
#
# class CardApi(ListAPIView):
#     queryset = Card.objects.all()
#     serializer_class = CardSerializer
#
#

from rest_framework import generics
# from rest_framework.generics import ModelViewSet
from rest_framework import viewsets



from .serializers import ListSerializer, CardSerializer
from .models import List, Card

class ListViewSet(viewsets.ModelViewSet):
    queryset = List.objects.all()
    serializer_class = ListSerializer

class CardViewSet(viewsets.ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer
