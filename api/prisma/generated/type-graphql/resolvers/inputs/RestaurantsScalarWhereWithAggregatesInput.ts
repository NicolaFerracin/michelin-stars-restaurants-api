import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntNullableWithAggregatesFilter } from "../inputs/BigIntNullableWithAggregatesFilter";
import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { FloatNullableWithAggregatesFilter } from "../inputs/FloatNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("RestaurantsScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class RestaurantsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [RestaurantsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: RestaurantsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RestaurantsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: RestaurantsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RestaurantsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: RestaurantsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  id?: BigIntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  name?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntNullableWithAggregatesFilter, {
    nullable: true
  })
  rating?: BigIntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  guide?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  img?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  link?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  location?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  type?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableWithAggregatesFilter, {
    nullable: true
  })
  lat?: FloatNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableWithAggregatesFilter, {
    nullable: true
  })
  long?: FloatNullableWithAggregatesFilter | undefined;
}
