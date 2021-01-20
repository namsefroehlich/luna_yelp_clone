from rest_framework import serializers

from users.serializers import UserSerializer

from interests.models import Interest


class InterestSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)

    class Meta:
        model = Interest
        fields = '__all__'
