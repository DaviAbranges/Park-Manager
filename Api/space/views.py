from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from space.serializers import SpaceSerializer
from space.models import Space
from rest_framework.permissions import IsAuthenticated  # Exemplo de permissões, ajuste conforme necessário


class SpaceListCreateView(ListCreateAPIView):
    serializer_class = SpaceSerializer
    queryset = Space.objects.order_by('status', 'type').all()
    # permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend, SearchFilter]
    # filterset_fields = ['number', 'type', 'status']
    search_fields = ['type', 'status']


class SpaceRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    serializer_class = SpaceSerializer
    queryset = Space.objects.all()
    permission_classes = [IsAuthenticated]