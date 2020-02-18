import graphene
import graphql_jwt
import wager.schema.schema
import user.schema


# Overriding to return user
class ObtainJSONWebToken(graphql_jwt.JSONWebTokenMutation):
    user = graphene.Field(user.schema.UserType)

    @classmethod
    def resolve(cls, root, info, **kwargs):
        return cls(user=info.context.user)


class Query(wager.schema.schema.Query, user.schema.Query,  graphene.ObjectType):
    pass


class Mutation(user.schema.Mutation, graphene.ObjectType):
    token_auth = ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
