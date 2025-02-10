from django.urls import path
from vehicles.views import VehiclesListCreateView, VehiclesRetrieveUpdateDestroyView

urlpatterns = [
    path('', VehiclesListCreateView.as_view(), name='vehicles-list-create'),
    path('<int:pk>/', VehiclesRetrieveUpdateDestroyView.as_view(), name='vehicles-detail'),
]
