from django.contrib.auth import get_user_model
from django.db import models

from restaurants.models import Restaurant

User = get_user_model()


class Review(models.Model):
    rating_choices = [
        (1, 1),
        (2, 2),
        (3, 3),
        (4, 4),
        (5, 5)
    ]

    content = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    rating = models.IntegerField(choices=rating_choices)
    author = models.ForeignKey(to=User, related_name='fk_review_user', on_delete=models.CASCADE)
    restaurant = models.ForeignKey(to=Restaurant, related_name='fk_review_restaurant', on_delete=models.CASCADE)

    def __str__(self):
        return f'ID {self.pk}: Review by {self.author} on Restaurant {self.restaurant.name}'
