import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RestaurantsCreateInput } from "../../../inputs/RestaurantsCreateInput";
import { RestaurantsUpdateInput } from "../../../inputs/RestaurantsUpdateInput";
import { RestaurantsWhereUniqueInput } from "../../../inputs/RestaurantsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertRestaurantsArgs {
  @TypeGraphQL.Field(_type => RestaurantsWhereUniqueInput, {
    nullable: false
  })
  where!: RestaurantsWhereUniqueInput;

  @TypeGraphQL.Field(_type => RestaurantsCreateInput, {
    nullable: false
  })
  create!: RestaurantsCreateInput;

  @TypeGraphQL.Field(_type => RestaurantsUpdateInput, {
    nullable: false
  })
  update!: RestaurantsUpdateInput;
}
