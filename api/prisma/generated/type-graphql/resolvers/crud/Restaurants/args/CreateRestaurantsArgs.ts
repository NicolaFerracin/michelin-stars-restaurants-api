import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RestaurantsCreateInput } from "../../../inputs/RestaurantsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateRestaurantsArgs {
  @TypeGraphQL.Field(_type => RestaurantsCreateInput, {
    nullable: false
  })
  data!: RestaurantsCreateInput;
}
