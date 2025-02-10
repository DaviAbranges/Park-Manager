from rest_framework import serializers
from vehicles.models import Vehicles

class VehiclesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicles
        fields = ['id', 'name', 'plate', 'type', 'model', 'year', 'Color']
