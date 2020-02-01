# Generated by Django 3.0.2 on 2020-02-01 16:21

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('city_name', models.CharField(max_length=64)),
                ('team_name', models.CharField(max_length=64)),
                ('league', models.CharField(choices=[('NFL', 'NFL'), ('NBA', 'NBA'), ('NHL', 'NHL'), ('MLB', 'MLB'), ('NCAAB', 'NCAAB'), ('NCAAF', 'NCAAF')], default='NBA', max_length=8)),
            ],
        ),
        migrations.CreateModel(
            name='Wager',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('duration', models.CharField(choices=[('1H', 'First Half'), ('2H', 'Second Half'), ('FG', 'Full Game')], default='FG', max_length=2)),
                ('bet_id', models.IntegerField(default=None)),
                ('placed', models.DateTimeField(blank=True, default=django.utils.timezone.now)),
                ('bet_type', models.CharField(choices=[('ATS', 'Against the Spread'), ('ML', 'Moneyline'), ('O', 'Over'), ('U', 'Under')], default='ATS', max_length=3)),
                ('spread', models.IntegerField(default=None)),
                ('vig', models.IntegerField(default=-110)),
                ('risk', models.DecimalField(decimal_places=2, max_digits=6)),
                ('collect', models.DecimalField(decimal_places=2, max_digits=6)),
                ('result', models.CharField(choices=[('W', 'Win'), ('L', 'Loss'), ('P', 'Push')], default=None, max_length=3)),
                ('team', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='wager.Team')),
            ],
        ),
    ]
