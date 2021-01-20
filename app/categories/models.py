from django.db import models

from restaurants.models import Restaurant


class Category(models.Model):
    name = models.CharField(max_length=30)
    restaurant = models.ManyToManyField(to=Restaurant, related_name='m2m_restaurant_cat')

    def __str__(self):
        return f'ID {self.pk}: {self.name}'
