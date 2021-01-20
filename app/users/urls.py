from django.urls import path

from users.views import ListUsers, GetPatchUsers, GetUser


urlpatterns = [
    path('', ListUsers.as_view()),
    path('me/', GetPatchUsers.as_view()),
    path('<int:id>/', GetUser.as_view())
]
