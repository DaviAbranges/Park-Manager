from django.db import models

class VehiclesTypes(models.TextChoices):
    CAR = 'car', 'Car'
    MOTORCYCLE = 'motorcycle', 'Motorcycle'


class Vehicles(models.Model):
    name = models.CharField(max_length=100)
    plate = models.CharField(max_length=7)
    type = models.CharField(max_length=255, choices=VehiclesTypes.choices, default=VehiclesTypes.CAR)
    model = models.CharField(max_length=255)
    year = models.PositiveIntegerField()
    Color = models.CharField(max_length=255)
