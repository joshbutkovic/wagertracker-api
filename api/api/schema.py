import graphene
import graphql_jwt
import wager.schema.schema
import user.schema


class Query(wager.schema.schema.Query, user.schema.Query,  graphene.ObjectType):
    pass


class Mutation(user.schema.Mutation, graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
