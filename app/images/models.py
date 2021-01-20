from django.db import models

from restaurants.models import Restaurant


def user_directory_path(instance, filename):
    return f'user_{instance.restaurant_image.owner.id}/{filename}'


class Image(models.Model):
    image_name = models.ImageField(upload_to=user_directory_path, blank=True, null=True)
    restaurant_image = models.ForeignKey(to=Restaurant, related_name='fk_image_restaurant', on_delete=models.CASCADE)

    def __str__(self):
        return f'ID {self.pk}: {self.image_name}'
