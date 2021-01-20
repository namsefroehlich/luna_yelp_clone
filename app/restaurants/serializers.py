from django.db.models import Avg
from rest_framework import serializers

from users.serializers import UserSerializer

from restaurants.models import Restaurant

from images.serializers import ImageSerializer

from time_tables.serializers import TimeTableSerializer

from categories.serializers import CategorySerializer

# from reviews.serializers import ReviewSerializer


class RestaurantSerializer(serializers.ModelSerializer):
    owner = UserSerializer(read_only=True)
    fk_image_restaurant = ImageSerializer(many=True, required=False)
    fk_timetable_restaurant = TimeTableSerializer(many=True, required=False)
    m2m_restaurant_cat = CategorySerializer(many=True, required=True)
    # fk_review_restaurant = ReviewSerializer(many=True)
    rating = serializers.SerializerMethodField()

    def get_rating(self, instance):
        return instance.fk_review_restaurant.all().aggregate(Avg('rating'))

    class Meta:
        model = Restaurant
        fields = ['name', 'country', 'street', 'city', 'zip', 'website', 'phone', 'email', 'price_level', 'owner',
                  'fk_image_restaurant', 'fk_timetable_restaurant', 'm2m_restaurant_cat', 'rating']
