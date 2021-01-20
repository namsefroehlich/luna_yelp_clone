from django.urls import path

from categories.views import ListCategoriesView

urlpatterns = [
    path('list/', ListCategoriesView.as_view())
]
