import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedFloatNullableFilter } from "../inputs/NestedFloatNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";

@TypeGraphQL.InputType("NestedFloatNullableWithAggregatesFilter", {
  isAbstract: true
})
export class NestedFloatNullableWithAggregatesFilter {
  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  equals?: number | undefined;

  @TypeGraphQL.Field(_type => [TypeGraphQL.Float], {
    nullable: true
  })
  in?: number[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGraphQL.Float], {
    nullable: true
  })
  notIn?: number[] | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  lt?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  lte?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  gt?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  gte?: number | undefined;

  @TypeGraphQL.Field(_type => NestedFloatNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedFloatNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedFloatNullableFilter, {
    nullable: true
  })
  _avg?: NestedFloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedFloatNullableFilter, {
    nullable: true
  })
  _sum?: NestedFloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedFloatNullableFilter, {
    nullable: true
  })
  _min?: NestedFloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedFloatNullableFilter, {
    nullable: true
  })
  _max?: NestedFloatNullableFilter | undefined;
}
