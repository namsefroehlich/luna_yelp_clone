from django.contrib.auth import get_user_model
from django.db import models

from comments.models import Comment
from reviews.models import Review

User = get_user_model()


class Like(models.Model):
    user_like = models.ForeignKey(to=User, related_name='fk_like_user', on_delete=models.CASCADE)
    review_like = models.ForeignKey(to=Review, related_name='fk_like_review', on_delete=models.CASCADE, null=True, blank=True)
    comment_like = models.ForeignKey(to=Comment, related_name='fk_like_comment', on_delete=models.CASCADE, null=True, blank=True)
