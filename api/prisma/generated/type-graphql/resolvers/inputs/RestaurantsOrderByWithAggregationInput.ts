import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RestaurantsAvgOrderByAggregateInput } from "../inputs/RestaurantsAvgOrderByAggregateInput";
import { RestaurantsCountOrderByAggregateInput } from "../inputs/RestaurantsCountOrderByAggregateInput";
import { RestaurantsMaxOrderByAggregateInput } from "../inputs/RestaurantsMaxOrderByAggregateInput";
import { RestaurantsMinOrderByAggregateInput } from "../inputs/RestaurantsMinOrderByAggregateInput";
import { RestaurantsSumOrderByAggregateInput } from "../inputs/RestaurantsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RestaurantsOrderByWithAggregationInput", {
  isAbstract: true
})
export class RestaurantsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rating?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  guide?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  img?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  link?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  location?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lat?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  long?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => RestaurantsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: RestaurantsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: RestaurantsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: RestaurantsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: RestaurantsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: RestaurantsSumOrderByAggregateInput | undefined;
}
