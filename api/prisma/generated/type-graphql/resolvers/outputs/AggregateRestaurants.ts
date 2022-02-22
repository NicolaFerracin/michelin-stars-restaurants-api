import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RestaurantsAvgAggregate } from "../outputs/RestaurantsAvgAggregate";
import { RestaurantsCountAggregate } from "../outputs/RestaurantsCountAggregate";
import { RestaurantsMaxAggregate } from "../outputs/RestaurantsMaxAggregate";
import { RestaurantsMinAggregate } from "../outputs/RestaurantsMinAggregate";
import { RestaurantsSumAggregate } from "../outputs/RestaurantsSumAggregate";

@TypeGraphQL.ObjectType("AggregateRestaurants", {
  isAbstract: true
})
export class AggregateRestaurants {
  @TypeGraphQL.Field(_type => RestaurantsCountAggregate, {
    nullable: true
  })
  _count!: RestaurantsCountAggregate | null;

  @TypeGraphQL.Field(_type => RestaurantsAvgAggregate, {
    nullable: true
  })
  _avg!: RestaurantsAvgAggregate | null;

  @TypeGraphQL.Field(_type => RestaurantsSumAggregate, {
    nullable: true
  })
  _sum!: RestaurantsSumAggregate | null;

  @TypeGraphQL.Field(_type => RestaurantsMinAggregate, {
    nullable: true
  })
  _min!: RestaurantsMinAggregate | null;

  @TypeGraphQL.Field(_type => RestaurantsMaxAggregate, {
    nullable: true
  })
  _max!: RestaurantsMaxAggregate | null;
}
