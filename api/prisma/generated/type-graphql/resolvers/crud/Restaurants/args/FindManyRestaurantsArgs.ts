import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RestaurantsOrderByWithRelationInput } from "../../../inputs/RestaurantsOrderByWithRelationInput";
import { RestaurantsWhereInput } from "../../../inputs/RestaurantsWhereInput";
import { RestaurantsWhereUniqueInput } from "../../../inputs/RestaurantsWhereUniqueInput";
import { RestaurantsScalarFieldEnum } from "../../../../enums/RestaurantsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyRestaurantsArgs {
  @TypeGraphQL.Field(_type => RestaurantsWhereInput, {
    nullable: true
  })
  where?: RestaurantsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RestaurantsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: RestaurantsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => RestaurantsWhereUniqueInput, {
    nullable: true
  })
  cursor?: RestaurantsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [RestaurantsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "rating" | "guide" | "img" | "link" | "location" | "type" | "lat" | "long"> | undefined;
}
