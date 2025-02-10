from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from vehicles.models import Vehicles
from vehicles.serializers import VehiclesSerializer
from rest_framework.permissions import IsAuthenticated  # Exemplo de permissões, ajuste conforme necessário


class VehiclesListCreateView(ListCreateAPIView):
    serializer_class = VehiclesSerializer
    queryset = Vehicles.objects.order_by('name', 'year').all()
    # permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_fields = ['name', 'type', 'year', 'Color']
    search_fields = ['name', 'plate']


class VehiclesRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    serializer_class = VehiclesSerializer
    queryset = Vehicles.objects.all()
    permission_classes = [IsAuthenticated]