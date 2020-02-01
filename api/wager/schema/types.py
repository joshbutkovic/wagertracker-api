from wager.models import Wager, Team
from graphene_django.types import DjangoObjectType


class WagerType(DjangoObjectType):
    class Meta:
        model = Wager


class TeamType(DjangoObjectType):
    class Meta:
        model = Team
