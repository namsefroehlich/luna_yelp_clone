from django.contrib.auth import get_user_model
from rest_framework import filters

from rest_framework.generics import ListAPIView, RetrieveUpdateAPIView, RetrieveAPIView

from users.serializers import UserSerializer

User = get_user_model()


class ListUsers(ListAPIView):
    search_fields = ['first_name', 'last_name', 'username']
    filter_backends = (filters.SearchFilter,)
    queryset = User.objects.all()
    serializer_class = UserSerializer


class GetPatchUsers(RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []

    def get_object(self):
        return self.request.user


class GetUser(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'id'
