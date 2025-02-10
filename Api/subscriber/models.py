from django.db import models

class Subscriber(models.Model):
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=255, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    cpf = models.CharField(max_length=255, null=True, blank=True)
    vehicles_id = models.ForeignKey('vehicles.Vehicles', on_delete=models.CASCADE)
