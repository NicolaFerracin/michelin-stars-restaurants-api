import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByRestaurantsArgs } from "./args/GroupByRestaurantsArgs";
import { Restaurants } from "../../../models/Restaurants";
import { RestaurantsGroupBy } from "../../outputs/RestaurantsGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Restaurants)
export class GroupByRestaurantsResolver {
  @TypeGraphQL.Query(_returns => [RestaurantsGroupBy], {
    nullable: false
  })
  async groupByRestaurants(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByRestaurantsArgs): Promise<RestaurantsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).restaurants.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
