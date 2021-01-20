from django.urls import path

from interests.views import ListCreateInterest

urlpatterns = [
    path('', ListCreateInterest.as_view()),
]
