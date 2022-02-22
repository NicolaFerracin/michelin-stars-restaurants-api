import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateRestaurantsArgs } from "./args/UpdateRestaurantsArgs";
import { Restaurants } from "../../../models/Restaurants";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Restaurants)
export class UpdateRestaurantsResolver {
  @TypeGraphQL.Mutation(_returns => Restaurants, {
    nullable: true
  })
  async updateRestaurants(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateRestaurantsArgs): Promise<Restaurants | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).restaurants.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
