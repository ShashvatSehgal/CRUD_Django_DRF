from enroll.models import user
from .serializers import userSerializer
from rest_framework import viewsets

class userViewSet(viewsets.ModelViewSet):
    queryset = user.objects.all()
    serializer_class = userSerializer