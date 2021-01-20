from django.conf import settings

from django.db import models


class Restaurant(models.Model):
    price_level_choices = [
        ('cheap', '$'),
        ('moderate', '$$'),
        ('average', '$$$'),
        ('expensive', '$$$$')
    ]

    name = models.CharField(max_length=50)
    country = models.CharField(max_length=40)
    street = models.CharField(max_length=40)
    city = models.CharField(max_length=40)
    zip = models.CharField(max_length=6, blank=True)
    website = models.CharField(max_length=40, blank=True)
    phone = models.CharField(max_length=12)
    email = models.EmailField(unique=True, blank=True, default=None, null=True)
    price_level = models.CharField(max_length=10, choices=price_level_choices, blank=True)
    owner = models.ForeignKey(to=settings.AUTH_USER_MODEL, related_name='fk_restaurant_user', on_delete=models.CASCADE)

    def __str__(self):
        return f'ID {self.pk}: {self.name}'
