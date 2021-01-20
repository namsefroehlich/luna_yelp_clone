from rest_framework import serializers

from reviews.models import Review
from users.serializers import UserSerializer

from restaurants.serializers import RestaurantSerializer

from likes.serializers import LikeSerializer


class ReviewSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    restaurant = RestaurantSerializer(read_only=True)
    fk_like_review = LikeSerializer(many=True)

    class Meta:
        model = Review
        fields = ['content', 'created', 'updated', 'rating', 'author', 'restaurant', 'fk_like_review']
