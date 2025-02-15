from rest_framework import serializers
from space.models import Space


class SpaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Space
        fields = ['status', 'type', 'number_spaces']
