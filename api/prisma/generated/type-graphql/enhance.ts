import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Restaurants: crudResolvers.RestaurantsCrudResolver
};
const actionResolversMap = {
  Restaurants: {
    findUniqueRestaurants: actionResolvers.FindUniqueRestaurantsResolver,
    findFirstRestaurants: actionResolvers.FindFirstRestaurantsResolver,
    findManyRestaurants: actionResolvers.FindManyRestaurantsResolver,
    createRestaurants: actionResolvers.CreateRestaurantsResolver,
    createManyRestaurants: actionResolvers.CreateManyRestaurantsResolver,
    deleteRestaurants: actionResolvers.DeleteRestaurantsResolver,
    updateRestaurants: actionResolvers.UpdateRestaurantsResolver,
    deleteManyRestaurants: actionResolvers.DeleteManyRestaurantsResolver,
    updateManyRestaurants: actionResolvers.UpdateManyRestaurantsResolver,
    upsertRestaurants: actionResolvers.UpsertRestaurantsResolver,
    aggregateRestaurants: actionResolvers.AggregateRestaurantsResolver,
    groupByRestaurants: actionResolvers.GroupByRestaurantsResolver
  }
};
const crudResolversInfo = {
  Restaurants: ["findUniqueRestaurants", "findFirstRestaurants", "findManyRestaurants", "createRestaurants", "createManyRestaurants", "deleteRestaurants", "updateRestaurants", "deleteManyRestaurants", "updateManyRestaurants", "upsertRestaurants", "aggregateRestaurants", "groupByRestaurants"]
};
const argsInfo = {
  FindUniqueRestaurantsArgs: ["where"],
  FindFirstRestaurantsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyRestaurantsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateRestaurantsArgs: ["data"],
  CreateManyRestaurantsArgs: ["data", "skipDuplicates"],
  DeleteRestaurantsArgs: ["where"],
  UpdateRestaurantsArgs: ["data", "where"],
  DeleteManyRestaurantsArgs: ["where"],
  UpdateManyRestaurantsArgs: ["data", "where"],
  UpsertRestaurantsArgs: ["where", "create", "update"],
  AggregateRestaurantsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByRestaurantsArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Restaurants: ["id", "name", "rating", "guide", "img", "link", "location", "type", "lat", "long"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateRestaurants: ["_count", "_avg", "_sum", "_min", "_max"],
  RestaurantsGroupBy: ["id", "name", "rating", "guide", "img", "link", "location", "type", "lat", "long", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  RestaurantsCountAggregate: ["id", "name", "rating", "guide", "img", "link", "location", "type", "lat", "long", "_all"],
  RestaurantsAvgAggregate: ["id", "rating", "lat", "long"],
  RestaurantsSumAggregate: ["id", "rating", "lat", "long"],
  RestaurantsMinAggregate: ["id", "name", "rating", "guide", "img", "link", "location", "type", "lat", "long"],
  RestaurantsMaxAggregate: ["id", "name", "rating", "guide", "img", "link", "location", "type", "lat", "long"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  RestaurantsWhereInput: ["AND", "OR", "NOT", "id", "name", "rating", "guide", "img", "link", "location", "type", "lat", "long"],
  RestaurantsOrderByWithRelationInput: ["id", "name", "rating", "guide", "img", "link", "location", "type", "lat", "long"],
  RestaurantsWhereUniqueInput: ["id"],
  RestaurantsOrderByWithAggregationInput: ["id", "name", "rating", "guide", "img", "link", "location", "type", "lat", "long", "_count", "_avg", "_max", "_min", "_sum"],
  RestaurantsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "rating", "guide", "img", "link", "location", "type", "lat", "long"],
  RestaurantsCreateInput: ["id", "name", "rating", "guide", "img", "link", "location", "type", "lat", "long"],
  RestaurantsUpdateInput: ["id", "name", "rating", "guide", "img", "link", "location", "type", "lat", "long"],
  RestaurantsCreateManyInput: ["id", "name", "rating", "guide", "img", "link", "location", "type", "lat", "long"],
  RestaurantsUpdateManyMutationInput: ["id", "name", "rating", "guide", "img", "link", "location", "type", "lat", "long"],
  BigIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  BigIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  FloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  RestaurantsCountOrderByAggregateInput: ["id", "name", "rating", "guide", "img", "link", "location", "type", "lat", "long"],
  RestaurantsAvgOrderByAggregateInput: ["id", "rating", "lat", "long"],
  RestaurantsMaxOrderByAggregateInput: ["id", "name", "rating", "guide", "img", "link", "location", "type", "lat", "long"],
  RestaurantsMinOrderByAggregateInput: ["id", "name", "rating", "guide", "img", "link", "location", "type", "lat", "long"],
  RestaurantsSumOrderByAggregateInput: ["id", "rating", "lat", "long"],
  BigIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  BigIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  FloatNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  BigIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  NullableBigIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  NullableFloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  NestedBigIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedBigIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBigIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBigIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

