[fooddata-central-api](../README.md) / [Exports](../modules.md) / AbridgedFoodNutrient

# Interface: AbridgedFoodNutrient

## Table of contents

### Properties

- [derivationCode](AbridgedFoodNutrient.md#derivationcode)
- [derivationDescription](AbridgedFoodNutrient.md#derivationdescription)
- [nutrientId](AbridgedFoodNutrient.md#nutrientid)
- [nutrientName](AbridgedFoodNutrient.md#nutrientname)
- [nutrientNumber](AbridgedFoodNutrient.md#nutrientnumber)
- [unitName](AbridgedFoodNutrient.md#unitname)
- [value](AbridgedFoodNutrient.md#value)

## Properties

### derivationCode

• `Optional` **derivationCode**: `string`

The derivation code of the nutrient.

**`Example`**

```ts
"LCCD"
```

#### Defined in

[src/types.ts:194](https://github.com/inji-gg/fooddata-central-api/blob/faf270d/src/types.ts#L194)

___

### derivationDescription

• `Optional` **derivationDescription**: `string`

The derivation description of the nutrient.

**`Example`**

```ts
"Calculated from a daily value percentage per serving size measure"
```

#### Defined in

[src/types.ts:200](https://github.com/inji-gg/fooddata-central-api/blob/faf270d/src/types.ts#L200)

___

### nutrientId

• **nutrientId**: `number`

A unique identifier for the nutrient

#### Defined in

[src/types.ts:164](https://github.com/inji-gg/fooddata-central-api/blob/faf270d/src/types.ts#L164)

___

### nutrientName

• `Optional` **nutrientName**: `string`

The name of the nutrient.

**`Example`**

```ts
"Iron, Fe"
```

#### Defined in

[src/types.ts:170](https://github.com/inji-gg/fooddata-central-api/blob/faf270d/src/types.ts#L170)

___

### nutrientNumber

• **nutrientNumber**: `string`

The number representing the nutrient.

**`Example`**

```ts
303
```

#### Defined in

[src/types.ts:176](https://github.com/inji-gg/fooddata-central-api/blob/faf270d/src/types.ts#L176)

___

### unitName

• **unitName**: [`FoodNutrientUnit`](../enums/FoodNutrientUnit.md)

The unit name of the nutrient.

**`Example`**

```ts
"mg"
```

#### Defined in

[src/types.ts:182](https://github.com/inji-gg/fooddata-central-api/blob/faf270d/src/types.ts#L182)

___

### value

• `Optional` **value**: `number`

The amount of the nutrient.

**`Example`**

```ts
0.53
```

#### Defined in

[src/types.ts:188](https://github.com/inji-gg/fooddata-central-api/blob/faf270d/src/types.ts#L188)
