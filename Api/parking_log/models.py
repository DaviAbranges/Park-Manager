from django.db import models
class Parking_log(models.Model):
    vehicle_id = models.ForeignKey('vehicles.Vehicles', on_delete=models.CASCADE)
    entry_datetime = models.DateTimeField()
    exit_datetime = models.DateTimeField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)
