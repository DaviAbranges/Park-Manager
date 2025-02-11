from django.urls import path
from space.views import SpaceListCreateView, SpaceRetrieveUpdateDestroyView

urlpatterns = [
    path('', SpaceListCreateView.as_view(), name='space-list-create'),
    path('<int:pk>/', SpaceRetrieveUpdateDestroyView.as_view(), name='space-detail'),
]
