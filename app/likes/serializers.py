from rest_framework import serializers

# from comments.serializers import CommentSerializer
from likes.models import Like
# from reviews.serializers import ReviewSerializer
# from users.serializers import UserSerializer


class LikeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Like
        fields = '__all__'
