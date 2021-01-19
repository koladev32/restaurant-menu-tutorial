from rest_framework import serializers
from menu.models import Menu


class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = ['id', 'name', 'description', 'price', 'created', 'updated']
        