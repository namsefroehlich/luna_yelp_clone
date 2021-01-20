from rest_framework import serializers

from reviews.serializers import ReviewSerializer
from users.serializers import UserSerializer

from comments.models import Comment


class CommentSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    review = ReviewSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = '__all__'
