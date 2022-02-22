import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertRestaurantsArgs } from "./args/UpsertRestaurantsArgs";
import { Restaurants } from "../../../models/Restaurants";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Restaurants)
export class UpsertRestaurantsResolver {
  @TypeGraphQL.Mutation(_returns => Restaurants, {
    nullable: false
  })
  async upsertRestaurants(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertRestaurantsArgs): Promise<Restaurants> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).restaurants.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
