from django.contrib.auth import get_user_model
from rest_framework import serializers

from interests.models import Interest

from likes.serializers import LikeSerializer

from comments.models import Comment
from reviews.models import Review

User = get_user_model()


class UserInterestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interest
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    fk_interest_user = UserInterestSerializer(many=True)
    fk_like_user = LikeSerializer(many=True)
    amount_of_reviews = serializers.SerializerMethodField()
    amount_of_comments = serializers.SerializerMethodField()

    def get_amount_of_reviews(self, user):
        return Review.objects.filter(author=user).count()

    def get_amount_of_comments(self, user):
        return Comment.objects.filter(author=user).count()

    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'first_name', 'last_name', 'location', 'about', 'phone', 'avatar',
                  'banner', 'date_joined', 'fk_interest_user', 'fk_like_user', 'amount_of_reviews', 'amount_of_comments']
