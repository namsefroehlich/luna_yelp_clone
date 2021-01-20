from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from reviews.models import Review
from reviews.serializers import ReviewSerializer

from reviews.permissions import IsUserOrReadOnly

from likes.models import Like


class CreateReviewView(CreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    lookup_field = 'restaurant_id'
    permission_classes = []

    def perform_create(self, serializer):
        serializer.save(author=self.request.user, restaurant_id=self.kwargs['restaurant_id'])


class ListReviewsByRest(ListAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    lookup_field = 'restaurant_id'
    permission_classes = []

    def get_queryset(self):
        return Review.objects.filter(restaurant=self.kwargs['restaurant_id'])


class ListReviewsByUser(ListAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    lookup_field = 'user_id'
    permission_classes = []

    def get_queryset(self):
        return Review.objects.filter(author=self.kwargs['user_id'])


class GetPatchDeleteReviewView(RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    lookup_field = 'id'
    permission_classes = [IsAuthenticated & IsUserOrReadOnly]


class ToggleLikeReview(GenericAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    lookup_field = 'id'
    permission_classes = []

    def post(self, request, *args, **kwargs):
        user = request.user
        like = Like.objects.filter(review_like_id=self.kwargs['id'], user_like=user)
        if len(like) == 0:
            like = Like(review_like_id=self.kwargs['id'], user_like=user)
            like.save()
        else:
            like[0].delete()

        return Response(status=200)


class ListLikedReviews(ListAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

    def get_queryset(self):
        return Review.objects.filter(fk_like_review__user_like=self.request.user)


class ListReviewsUserCommented(ListAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = []

    def get_queryset(self):
        review = Review.objects.filter(fk_comment_review__author=self.request.user)
        return review
