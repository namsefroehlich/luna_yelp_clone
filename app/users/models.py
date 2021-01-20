from django.contrib.auth.models import AbstractUser
from django.db import models


def user_directory_path(instance, filename):
    return f'{instance.username}/{filename}'


class User(AbstractUser):
    email = models.EmailField(unique=True)
    location = models.CharField(max_length=30, blank=True)
    about = models.TextField(blank=True, null=True)
    phone = models.CharField(max_length=15, null=True, blank=True)
    avatar = models.ImageField(upload_to=user_directory_path, blank=True, null=True)
    banner = models.ImageField(upload_to=user_directory_path, blank=True, null=True)

    def __str__(self):
        return f'{self.username}'
