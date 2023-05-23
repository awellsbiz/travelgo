from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TripSerializer
from .models import Trip
from django.conf import Settings
from django.http import JsonResponse
import googlemaps
import os
import environ
import pprint
import time

env = environ.Env()
environ.Env.read_env()

class TripView(viewsets.ModelViewSet):
    serializer_class = TripSerializer
    queryset= Trip.objects.all()



def search_nearby(request):
    API_KEY = env('GOOGLE_MAPS_API_KEY')


    gmaps = googlemaps.Client(key = 'AIzaSyBA33G2mozyNhZHxTAlPOMYspt3WsXFfoA')
    places_result = gmaps.places_nearby(location='40.7128, -74.0060', radius=500, keyword='restaurants')

    return JsonResponse(places_result)