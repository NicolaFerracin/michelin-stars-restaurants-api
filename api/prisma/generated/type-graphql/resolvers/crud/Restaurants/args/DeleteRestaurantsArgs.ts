import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RestaurantsWhereUniqueInput } from "../../../inputs/RestaurantsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteRestaurantsArgs {
  @TypeGraphQL.Field(_type => RestaurantsWhereUniqueInput, {
    nullable: false
  })
  where!: RestaurantsWhereUniqueInput;
}
