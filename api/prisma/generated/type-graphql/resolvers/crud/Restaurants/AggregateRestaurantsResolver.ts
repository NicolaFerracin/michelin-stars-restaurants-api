import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateRestaurantsArgs } from "./args/AggregateRestaurantsArgs";
import { Restaurants } from "../../../models/Restaurants";
import { AggregateRestaurants } from "../../outputs/AggregateRestaurants";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Restaurants)
export class AggregateRestaurantsResolver {
  @TypeGraphQL.Query(_returns => AggregateRestaurants, {
    nullable: false
  })
  async aggregateRestaurants(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRestaurantsArgs): Promise<AggregateRestaurants> {
    return getPrismaFromContext(ctx).restaurants.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
