import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { BigIntNullableFilter } from "../inputs/BigIntNullableFilter";
import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("RestaurantsWhereInput", {
  isAbstract: true
})
export class RestaurantsWhereInput {
  @TypeGraphQL.Field(_type => [RestaurantsWhereInput], {
    nullable: true
  })
  AND?: RestaurantsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RestaurantsWhereInput], {
    nullable: true
  })
  OR?: RestaurantsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RestaurantsWhereInput], {
    nullable: true
  })
  NOT?: RestaurantsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  id?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntNullableFilter, {
    nullable: true
  })
  rating?: BigIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  guide?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  img?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  link?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  location?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  type?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  lat?: FloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  long?: FloatNullableFilter | undefined;
}
