from django.db import models
from django.contrib.auth.models import User

class Team(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name


class Activity(models.Model):
    username = models.CharField(max_length=100)  # Use username string instead of FK
    team = models.ForeignKey(Team, on_delete=models.CASCADE, null=True, blank=True)
    type = models.CharField(max_length=100)
    duration = models.PositiveIntegerField(help_text='Duration in minutes')
    date = models.DateField()

    def __str__(self):
        return f"{self.username} - {self.type} on {self.date}"

class Workout(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    suggested_for = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.name


class Leaderboard(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    username = models.CharField(max_length=100)  # Use username string instead of FK
    points = models.PositiveIntegerField(default=0)

    class Meta:
        unique_together = ('team', 'username')

    def __str__(self):
        return f"{self.team.name} - {self.username}: {self.points} pts"
