from django.urls import path

from restaurants.views import ListRestaurantsView, CreateRestaurantView, GetPatchDeleteRestaurantView, \
    ListRestaurantsByCat, ListRestaurantsByUser

urlpatterns = [
    path('', ListRestaurantsView.as_view()),
    path('new/', CreateRestaurantView.as_view()),
    path('<int:id>/', GetPatchDeleteRestaurantView.as_view()),
    path('category/<int:category_id>/', ListRestaurantsByCat.as_view()),
    path('user/<int:user_id>/', ListRestaurantsByUser.as_view())
]
