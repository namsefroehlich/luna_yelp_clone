from django.db import models

from restaurants.models import Restaurant


class TimeTable(models.Model):
    opening = models.TimeField()
    closing = models.TimeField()
    restaurant = models.ForeignKey(to=Restaurant, related_name='fk_timetable_restaurant', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.restaurant}: open: {self.opening}, close: {self.closing}'
