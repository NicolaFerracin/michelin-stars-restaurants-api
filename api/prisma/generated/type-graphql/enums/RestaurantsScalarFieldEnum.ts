import * as TypeGraphQL from "type-graphql";

export enum RestaurantsScalarFieldEnum {
  id = "id",
  name = "name",
  rating = "rating",
  guide = "guide",
  img = "img",
  link = "link",
  location = "location",
  type = "type",
  lat = "lat",
  long = "long"
}
TypeGraphQL.registerEnumType(RestaurantsScalarFieldEnum, {
  name: "RestaurantsScalarFieldEnum",
  description: undefined,
});
