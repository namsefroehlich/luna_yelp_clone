from rest_framework.generics import CreateAPIView, ListAPIView, DestroyAPIView, GenericAPIView

from comments.models import Comment

from comments.serializers import CommentSerializer
from rest_framework.permissions import IsAuthenticated

from comments.permissions import IsUserOrReadOnly

from likes.models import Like
from rest_framework.response import Response


class CreateCommentView(CreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    lookup_field = 'review_id'
    permission_classes = []

    def perform_create(self, serializer):
        serializer.save(author=self.request.user, review_id=self.kwargs['review_id'])


class ListCommentsByUser(ListAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    lookup_field = 'user_id'
    permission_classes = []

    def get_queryset(self):
        return Comment.objects.filter(author=self.kwargs['user_id'])


class DeleteCommentView(DestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    lookup_url_kwarg = 'comment_id'
    permission_classes = [IsAuthenticated & IsUserOrReadOnly]


class ToggleLikeComment(GenericAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    lookup_field = 'id'
    permission_classes = []

    def post(self, request, *args, **kwargs):
        user = request.user
        like = Like.objects.filter(comment_like_id=self.kwargs['id'], user_like=user)
        if len(like) == 0:
            like = Like(comment_like_id=self.kwargs['id'], user_like=user)
            like.save()
        else:
            like[0].delete()

        return Response(status=200)


class ListLikedComments(ListAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def get_queryset(self):
        return Comment.objects.filter(fk_like_comment__user_like=self.request.user)
