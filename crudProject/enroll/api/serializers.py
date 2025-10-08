from rest_framework import serializers
from  enroll.models import user

class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = ['id','name','email','password']