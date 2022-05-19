from rest_framework import viewsets
from .models import Menu
from .serializers import MenuSerializer


class MenuViewSet(viewsets.ModelViewSet):
    http_methods = ['get','update','post', 'delete']
    serializer_class = MenuSerializer
    
    def get_queryset(self):
        return Menu.objects.all()

