from rest_framework import serializers

from time_tables.models import TimeTable


class TimeTableSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimeTable
        fields = '__all__'
