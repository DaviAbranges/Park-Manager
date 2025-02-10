from django.db import models
from vehicles.models import VehiclesTypes

class SpaceStatusChoice(models.TextChoices):
    AVAILABLE = 'available', 'Available'
    OCCUPIED = 'occupied', 'occupied'


class Space(models.Model):
    status = models.CharField(max_length=255, choices=SpaceStatusChoice.choices, default=SpaceStatusChoice.AVAILABLE)
    type = models.CharField(max_length=255, choices=VehiclesTypes.choices, default=VehiclesTypes.CAR)
    number_spaces = models.PositiveIntegerField()

