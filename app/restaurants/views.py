from django.db.models import Avg
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from restaurants.models import Restaurant
from restaurants.serializers import RestaurantSerializer

from categories.models import Category

from restaurants.permissions import IsUserOrReadOnly


class ListRestaurantsView(ListAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer


class CreateRestaurantView(CreateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def post(self, request, *args, **kwargs):
        restaurant = Restaurant(owner=self.request.user, name=request.data['name'], country=request.data['country'],
                                street=request.data['street'], city=request.data['city'], phone=request.data['phone'])
        restaurant.save()
        if request.data['category']:

            result = Category.objects.filter(name__icontains=request.data['category'])

            if result:
                for category in result:
                    restaurant.m2m_restaurant_cat.add(category)
            else:
                category = Category(name=request.data['category'])
                category.save()
                restaurant.m2m_restaurant_cat.add(category)

        return Response(status=200)


class GetPatchDeleteRestaurantView(RetrieveUpdateDestroyAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    lookup_field = 'id'
    permission_classes = [IsAuthenticated & IsUserOrReadOnly]


class ListRestaurantsByCat(ListAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    lookup_field = 'category_id'
    permission_classes = []

    def get_queryset(self):
        return Restaurant.objects.filter(m2m_restaurant_cat=self.kwargs['category_id'])


class ListRestaurantsByUser(ListAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    lookup_field = 'user_id'
    permission_classes = []

    def get_queryset(self):
        return Restaurant.objects.filter(owner=self.kwargs['user_id'])


class ListTopRestaurantsView(ListAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        return Restaurant.objects.annotate(top_rest=Avg('fk_review_restaurant__rating')).order_by('-top_rest').all()[:4]
