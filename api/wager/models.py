from django.db import models
from django.utils.timezone import now

TYPES = (('ATS', 'Against the Spread'), ('ML', 'Moneyline'), ('O', 'Over'), ('U', 'Under'))
DURATIONS = (('1H', 'First Half'), ('2H', 'Second Half'), ('FG', 'Full Game'))
RESULTS = (('W', 'Win'), ('L', 'Loss'), ('P', 'Push'))
LEAGUE = (('NFL', 'NFL'), ('NBA', 'NBA'), ('NHL', 'NHL'), ('MLB', 'MLB'), ('NCAAB', 'NCAAB'), ('NCAAF', 'NCAAF'))


class Team(models.Model):
    city_name = models.CharField(max_length=64)
    team_name = models.CharField(max_length=64)
    league = models.CharField(
        max_length=8,
        choices=LEAGUE,
        default='NBA',
    )

    def __str__(self):
        return self.city_name + ' ' + self.team_name


class Wager(models.Model):
    duration = models.CharField(
        max_length=2,
        choices=DURATIONS,
        default='FG',
    )
    bet_id = models.IntegerField(default=None)
    placed = models.DateTimeField(default=now, blank=True)
    bet_type = models.CharField(
        max_length=3,
        choices=TYPES,
        default='ATS',
    )
    spread = models.IntegerField(default=None)
    team = models.ForeignKey(Team, on_delete=models.DO_NOTHING)
    vig = models.IntegerField(default=-110)
    risk = models.DecimalField(max_digits=6, decimal_places=2)
    collect = models.DecimalField(max_digits=6, decimal_places=2)
    result = models.CharField(
        max_length=3,
        choices=RESULTS,
        default=None
    )
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)


    def __str__(self):
        return str(self.id)
