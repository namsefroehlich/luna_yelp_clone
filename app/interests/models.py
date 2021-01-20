from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Interest(models.Model):
    interest_name = models.CharField(max_length=30)
    author = models.ForeignKey(to=User, related_name='fk_interest_user', blank=True, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.interest_name}'
