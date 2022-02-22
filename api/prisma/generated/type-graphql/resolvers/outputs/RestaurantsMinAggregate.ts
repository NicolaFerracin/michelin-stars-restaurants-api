import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("RestaurantsMinAggregate", {
  isAbstract: true
})
export class RestaurantsMinAggregate {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id!: bigint | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  rating!: bigint | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  guide!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  img!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  link!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  location!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  lat!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  long!: number | null;
}
