from django.contrib.auth import get_user_model
from django.db import models

from reviews.models import Review

User = get_user_model()


class Comment(models.Model):

    content = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(to=User, related_name='fk_comment_user', on_delete=models.CASCADE)
    review = models.ForeignKey(to=Review, related_name='fk_comment_review', on_delete=models.CASCADE)

    def __str__(self):
        return f'ID {self.pk}: Comment by {self.author} on {self.review}'
