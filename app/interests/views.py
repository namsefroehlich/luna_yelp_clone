from rest_framework.generics import ListCreateAPIView

from interests.models import Interest

from interests.serializers import InterestSerializer


class ListCreateInterest(ListCreateAPIView):
    queryset = Interest.objects.all()
    serializer_class = InterestSerializer
    permission_classes = []

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
