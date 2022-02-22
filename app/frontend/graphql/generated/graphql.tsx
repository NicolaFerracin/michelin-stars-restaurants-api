import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateRestaurants = {
  __typename?: 'AggregateRestaurants';
  _avg?: Maybe<RestaurantsAvgAggregate>;
  _count?: Maybe<RestaurantsCountAggregate>;
  _max?: Maybe<RestaurantsMaxAggregate>;
  _min?: Maybe<RestaurantsMinAggregate>;
  _sum?: Maybe<RestaurantsSumAggregate>;
};

export type BigIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['BigInt']>;
  divide?: InputMaybe<Scalars['BigInt']>;
  increment?: InputMaybe<Scalars['BigInt']>;
  multiply?: InputMaybe<Scalars['BigInt']>;
  set?: InputMaybe<Scalars['BigInt']>;
};

export type BigIntFilter = {
  equals?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  not?: InputMaybe<NestedBigIntFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type BigIntNullableFilter = {
  equals?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  not?: InputMaybe<NestedBigIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type BigIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedBigIntNullableFilter>;
  _min?: InputMaybe<NestedBigIntNullableFilter>;
  _sum?: InputMaybe<NestedBigIntNullableFilter>;
  equals?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  not?: InputMaybe<NestedBigIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type BigIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBigIntFilter>;
  _min?: InputMaybe<NestedBigIntFilter>;
  _sum?: InputMaybe<NestedBigIntFilter>;
  equals?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  not?: InputMaybe<NestedBigIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type FloatNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedFloatNullableFilter>;
  _min?: InputMaybe<NestedFloatNullableFilter>;
  _sum?: InputMaybe<NestedFloatNullableFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyRestaurants: AffectedRowsOutput;
  createRestaurants: Restaurants;
  deleteManyRestaurants: AffectedRowsOutput;
  deleteRestaurants?: Maybe<Restaurants>;
  updateManyRestaurants: AffectedRowsOutput;
  updateRestaurants?: Maybe<Restaurants>;
  upsertRestaurants: Restaurants;
};


export type MutationCreateManyRestaurantsArgs = {
  data: Array<RestaurantsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateRestaurantsArgs = {
  data: RestaurantsCreateInput;
};


export type MutationDeleteManyRestaurantsArgs = {
  where?: InputMaybe<RestaurantsWhereInput>;
};


export type MutationDeleteRestaurantsArgs = {
  where: RestaurantsWhereUniqueInput;
};


export type MutationUpdateManyRestaurantsArgs = {
  data: RestaurantsUpdateManyMutationInput;
  where?: InputMaybe<RestaurantsWhereInput>;
};


export type MutationUpdateRestaurantsArgs = {
  data: RestaurantsUpdateInput;
  where: RestaurantsWhereUniqueInput;
};


export type MutationUpsertRestaurantsArgs = {
  create: RestaurantsCreateInput;
  update: RestaurantsUpdateInput;
  where: RestaurantsWhereUniqueInput;
};

export type NestedBigIntFilter = {
  equals?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  not?: InputMaybe<NestedBigIntFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type NestedBigIntNullableFilter = {
  equals?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  not?: InputMaybe<NestedBigIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type NestedBigIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedBigIntNullableFilter>;
  _min?: InputMaybe<NestedBigIntNullableFilter>;
  _sum?: InputMaybe<NestedBigIntNullableFilter>;
  equals?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  not?: InputMaybe<NestedBigIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type NestedBigIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBigIntFilter>;
  _min?: InputMaybe<NestedBigIntFilter>;
  _sum?: InputMaybe<NestedBigIntFilter>;
  equals?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  not?: InputMaybe<NestedBigIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedFloatNullableFilter>;
  _min?: InputMaybe<NestedFloatNullableFilter>;
  _sum?: InputMaybe<NestedFloatNullableFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableBigIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['BigInt']>;
  divide?: InputMaybe<Scalars['BigInt']>;
  increment?: InputMaybe<Scalars['BigInt']>;
  multiply?: InputMaybe<Scalars['BigInt']>;
  set?: InputMaybe<Scalars['BigInt']>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']>;
  divide?: InputMaybe<Scalars['Float']>;
  increment?: InputMaybe<Scalars['Float']>;
  multiply?: InputMaybe<Scalars['Float']>;
  set?: InputMaybe<Scalars['Float']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateRestaurants: AggregateRestaurants;
  findFirstRestaurants?: Maybe<Restaurants>;
  findManyRestaurants: Array<Restaurants>;
  findUniqueRestaurants?: Maybe<Restaurants>;
  groupByRestaurants: Array<RestaurantsGroupBy>;
};


export type QueryAggregateRestaurantsArgs = {
  cursor?: InputMaybe<RestaurantsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<RestaurantsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RestaurantsWhereInput>;
};


export type QueryFindFirstRestaurantsArgs = {
  cursor?: InputMaybe<RestaurantsWhereUniqueInput>;
  distinct?: InputMaybe<Array<RestaurantsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RestaurantsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RestaurantsWhereInput>;
};


export type QueryFindManyRestaurantsArgs = {
  cursor?: InputMaybe<RestaurantsWhereUniqueInput>;
  distinct?: InputMaybe<Array<RestaurantsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RestaurantsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RestaurantsWhereInput>;
};


export type QueryFindUniqueRestaurantsArgs = {
  where: RestaurantsWhereUniqueInput;
};


export type QueryGroupByRestaurantsArgs = {
  by: Array<RestaurantsScalarFieldEnum>;
  having?: InputMaybe<RestaurantsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<RestaurantsOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RestaurantsWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Restaurants = {
  __typename?: 'Restaurants';
  guide?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  img?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['Float']>;
  link?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  long?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['BigInt']>;
  type?: Maybe<Scalars['String']>;
};

export type RestaurantsAvgAggregate = {
  __typename?: 'RestaurantsAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  long?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

export type RestaurantsAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  long?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
};

export type RestaurantsCountAggregate = {
  __typename?: 'RestaurantsCountAggregate';
  _all: Scalars['Int'];
  guide: Scalars['Int'];
  id: Scalars['Int'];
  img: Scalars['Int'];
  lat: Scalars['Int'];
  link: Scalars['Int'];
  location: Scalars['Int'];
  long: Scalars['Int'];
  name: Scalars['Int'];
  rating: Scalars['Int'];
  type: Scalars['Int'];
};

export type RestaurantsCountOrderByAggregateInput = {
  guide?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  img?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  long?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type RestaurantsCreateInput = {
  guide?: InputMaybe<Scalars['String']>;
  id: Scalars['BigInt'];
  img?: InputMaybe<Scalars['String']>;
  lat?: InputMaybe<Scalars['Float']>;
  link?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  long?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['BigInt']>;
  type?: InputMaybe<Scalars['String']>;
};

export type RestaurantsCreateManyInput = {
  guide?: InputMaybe<Scalars['String']>;
  id: Scalars['BigInt'];
  img?: InputMaybe<Scalars['String']>;
  lat?: InputMaybe<Scalars['Float']>;
  link?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  long?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['BigInt']>;
  type?: InputMaybe<Scalars['String']>;
};

export type RestaurantsGroupBy = {
  __typename?: 'RestaurantsGroupBy';
  _avg?: Maybe<RestaurantsAvgAggregate>;
  _count?: Maybe<RestaurantsCountAggregate>;
  _max?: Maybe<RestaurantsMaxAggregate>;
  _min?: Maybe<RestaurantsMinAggregate>;
  _sum?: Maybe<RestaurantsSumAggregate>;
  guide?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  img?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['Float']>;
  link?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  long?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['BigInt']>;
  type?: Maybe<Scalars['String']>;
};

export type RestaurantsMaxAggregate = {
  __typename?: 'RestaurantsMaxAggregate';
  guide?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  img?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['Float']>;
  link?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  long?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['BigInt']>;
  type?: Maybe<Scalars['String']>;
};

export type RestaurantsMaxOrderByAggregateInput = {
  guide?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  img?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  long?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type RestaurantsMinAggregate = {
  __typename?: 'RestaurantsMinAggregate';
  guide?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  img?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['Float']>;
  link?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  long?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['BigInt']>;
  type?: Maybe<Scalars['String']>;
};

export type RestaurantsMinOrderByAggregateInput = {
  guide?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  img?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  long?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type RestaurantsOrderByWithAggregationInput = {
  _avg?: InputMaybe<RestaurantsAvgOrderByAggregateInput>;
  _count?: InputMaybe<RestaurantsCountOrderByAggregateInput>;
  _max?: InputMaybe<RestaurantsMaxOrderByAggregateInput>;
  _min?: InputMaybe<RestaurantsMinOrderByAggregateInput>;
  _sum?: InputMaybe<RestaurantsSumOrderByAggregateInput>;
  guide?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  img?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  long?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type RestaurantsOrderByWithRelationInput = {
  guide?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  img?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  long?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export enum RestaurantsScalarFieldEnum {
  Guide = 'guide',
  Id = 'id',
  Img = 'img',
  Lat = 'lat',
  Link = 'link',
  Location = 'location',
  Long = 'long',
  Name = 'name',
  Rating = 'rating',
  Type = 'type'
}

export type RestaurantsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<RestaurantsScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<RestaurantsScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<RestaurantsScalarWhereWithAggregatesInput>>;
  guide?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<BigIntWithAggregatesFilter>;
  img?: InputMaybe<StringNullableWithAggregatesFilter>;
  lat?: InputMaybe<FloatNullableWithAggregatesFilter>;
  link?: InputMaybe<StringNullableWithAggregatesFilter>;
  location?: InputMaybe<StringNullableWithAggregatesFilter>;
  long?: InputMaybe<FloatNullableWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  rating?: InputMaybe<BigIntNullableWithAggregatesFilter>;
  type?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type RestaurantsSumAggregate = {
  __typename?: 'RestaurantsSumAggregate';
  id?: Maybe<Scalars['BigInt']>;
  lat?: Maybe<Scalars['Float']>;
  long?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['BigInt']>;
};

export type RestaurantsSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  long?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
};

export type RestaurantsUpdateInput = {
  guide?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  img?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lat?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  link?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  long?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type RestaurantsUpdateManyMutationInput = {
  guide?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  img?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lat?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  link?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  long?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type RestaurantsWhereInput = {
  AND?: InputMaybe<Array<RestaurantsWhereInput>>;
  NOT?: InputMaybe<Array<RestaurantsWhereInput>>;
  OR?: InputMaybe<Array<RestaurantsWhereInput>>;
  guide?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<BigIntFilter>;
  img?: InputMaybe<StringNullableFilter>;
  lat?: InputMaybe<FloatNullableFilter>;
  link?: InputMaybe<StringNullableFilter>;
  location?: InputMaybe<StringNullableFilter>;
  long?: InputMaybe<FloatNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  rating?: InputMaybe<BigIntNullableFilter>;
  type?: InputMaybe<StringNullableFilter>;
};

export type RestaurantsWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type RestaurantFragment = { __typename?: 'Restaurants', id: any, name?: string | null, rating?: any | null, guide?: string | null, img?: string | null, link?: string | null, location?: string | null, type?: string | null, lat?: number | null, long?: number | null };

export type FindManyRestaurantsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindManyRestaurantsQuery = { __typename?: 'Query', findManyRestaurants: Array<{ __typename?: 'Restaurants', id: any, name?: string | null, rating?: any | null, guide?: string | null, img?: string | null, link?: string | null, location?: string | null, type?: string | null, lat?: number | null, long?: number | null }> };

export const RestaurantFragmentDoc = gql`
    fragment Restaurant on Restaurants {
  id
  name
  rating
  guide
  img
  link
  location
  type
  lat
  long
}
    `;
export const FindManyRestaurantsDocument = gql`
    query FindManyRestaurants {
  findManyRestaurants {
    ...Restaurant
  }
}
    ${RestaurantFragmentDoc}`;

export function useFindManyRestaurantsQuery(options?: Omit<Urql.UseQueryArgs<FindManyRestaurantsQueryVariables>, 'query'>) {
  return Urql.useQuery<FindManyRestaurantsQuery>({ query: FindManyRestaurantsDocument, ...options });
};