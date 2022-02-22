import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedBigIntFilter } from "../inputs/NestedBigIntFilter";
import { NestedBigIntWithAggregatesFilter } from "../inputs/NestedBigIntWithAggregatesFilter";
import { NestedFloatFilter } from "../inputs/NestedFloatFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";

@TypeGraphQL.InputType("BigIntWithAggregatesFilter", {
  isAbstract: true
})
export class BigIntWithAggregatesFilter {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  equals?: bigint | undefined;

  @TypeGraphQL.Field(_type => [GraphQLScalars.BigIntResolver], {
    nullable: true
  })
  in?: bigint[] | undefined;

  @TypeGraphQL.Field(_type => [GraphQLScalars.BigIntResolver], {
    nullable: true
  })
  notIn?: bigint[] | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  lt?: bigint | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  lte?: bigint | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  gt?: bigint | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  gte?: bigint | undefined;

  @TypeGraphQL.Field(_type => NestedBigIntWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedBigIntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedFloatFilter, {
    nullable: true
  })
  _avg?: NestedFloatFilter | undefined;

  @TypeGraphQL.Field(_type => NestedBigIntFilter, {
    nullable: true
  })
  _sum?: NestedBigIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedBigIntFilter, {
    nullable: true
  })
  _min?: NestedBigIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedBigIntFilter, {
    nullable: true
  })
  _max?: NestedBigIntFilter | undefined;
}
