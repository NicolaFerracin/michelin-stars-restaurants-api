import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("NestedBigIntFilter", {
  isAbstract: true
})
export class NestedBigIntFilter {
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

  @TypeGraphQL.Field(_type => NestedBigIntFilter, {
    nullable: true
  })
  not?: NestedBigIntFilter | undefined;
}
