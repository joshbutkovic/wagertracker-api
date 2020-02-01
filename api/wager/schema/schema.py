import graphene
from graphene_django.types import ObjectType
from wager.models import Wager, Team
from .types import WagerType, TeamType


# Query
class Query(ObjectType):
    wager = graphene.Field(WagerType, id=graphene.Int())
    wagers = graphene.List(WagerType)
    team = graphene.Field(TeamType, id=graphene.Int())
    teams = graphene.List(TeamType)

    def resolve_wager(self, info, **kwargs):
        id = kwargs.get('id')
        if id is not None:
            return Wager.objects.get(pk=id)

        return None

    def resolve_wagers(self, info, **kwargs):
        return Wager.objects.all()

    def resolve_team(self, info, **kwargs):
        id = kwargs.get('id')
        if id is not None:
            return Team.objects.get(pk=id)

        return None

    def resolve_teams(self, info, **kwargs):
        return Team.objects.all()


# Input Objects
#
#

# Mutations (Create, Update, Delete)
#
#

# Wire it all up
schema = graphene.Schema(query=Query)
