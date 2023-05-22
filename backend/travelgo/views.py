from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TripSerializer
from .models import Trip

class TripView(viewsets.ModelViewSet):
    serializer_class = TripSerializer
    queryset= Trip.objects.all()
