from rest_framework import serializers

from categories.models import Category

from users.serializers import UserSerializer


class CategorySerializer(serializers.ModelSerializer):
    owner = UserSerializer(read_only=True)

    class Meta:
        model = Category
        fields = '__all__'
