from django.db import models

class Trip(models.Model):
    name = models.CharField(max_length= 50)
    arrival = models.DateField()
    departure = models.DateField()

    def __str__(self):
        return self.title
