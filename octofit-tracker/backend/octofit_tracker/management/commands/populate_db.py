from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from octofit_tracker.models import Team, Activity, Workout, Leaderboard
from django.utils import timezone

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        # Clear existing data
        Leaderboard.objects.all().delete()
        Activity.objects.all().delete()
        Workout.objects.all().delete()
        Team.objects.all().delete()
        # Djongo workaround: delete non-superuser users one by one
        for user in User.objects.all():
            if not user.is_superuser:
                user.delete()

        # Create Teams
        marvel = Team.objects.create(name='Marvel', description='Marvel Superheroes')
        dc = Team.objects.create(name='DC', description='DC Superheroes')


        # Create Workouts
        w1 = Workout.objects.create(name='Cardio Blast', description='High intensity cardio workout', suggested_for='Marvel')
        w2 = Workout.objects.create(name='Strength Builder', description='Strength training routine', suggested_for='DC')

        # Create Activities (no user FK)
        Activity.objects.create(user=None, team=marvel, type='Running', duration=30, date=timezone.now().date())
        Activity.objects.create(user=None, team=marvel, type='Cycling', duration=45, date=timezone.now().date())
        Activity.objects.create(user=None, team=dc, type='Swimming', duration=60, date=timezone.now().date())
        Activity.objects.create(user=None, team=dc, type='Yoga', duration=40, date=timezone.now().date())

        # Create Leaderboard (no user FK)
        Leaderboard.objects.create(team=marvel, user=None, points=100)
        Leaderboard.objects.create(team=marvel, user=None, points=80)
        Leaderboard.objects.create(team=dc, user=None, points=120)
        Leaderboard.objects.create(team=dc, user=None, points=90)

        self.stdout.write(self.style.SUCCESS('octofit_db database populated with test data.'))
