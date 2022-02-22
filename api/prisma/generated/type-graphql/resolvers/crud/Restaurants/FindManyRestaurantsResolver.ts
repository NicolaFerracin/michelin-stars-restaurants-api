import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyRestaurantsArgs } from "./args/FindManyRestaurantsArgs";
import { Restaurants } from "../../../models/Restaurants";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Restaurants)
export class FindManyRestaurantsResolver {
  @TypeGraphQL.Query(_returns => [Restaurants], {
    nullable: false
  })
  async findManyRestaurants(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyRestaurantsArgs): Promise<Restaurants[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).restaurants.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
