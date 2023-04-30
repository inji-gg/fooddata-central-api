[fooddata-central-api](../README.md) / [Exports](../modules.md) / SearchResultFood

# Interface: SearchResultFood

## Table of contents

### Properties

- [additionalDescriptions](SearchResultFood.md#additionaldescriptions)
- [allHighlightFields](SearchResultFood.md#allhighlightfields)
- [brandOwner](SearchResultFood.md#brandowner)
- [dataType](SearchResultFood.md#datatype)
- [description](SearchResultFood.md#description)
- [fdcId](SearchResultFood.md#fdcid)
- [foodCode](SearchResultFood.md#foodcode)
- [foodNutrients](SearchResultFood.md#foodnutrients)
- [gtinUpc](SearchResultFood.md#gtinupc)
- [ingredients](SearchResultFood.md#ingredients)
- [ndbNumber](SearchResultFood.md#ndbnumber)
- [publishedDate](SearchResultFood.md#publisheddate)
- [scientificName](SearchResultFood.md#scientificname)
- [score](SearchResultFood.md#score)
- [servingSize](SearchResultFood.md#servingsize)

## Properties

### additionalDescriptions

• `Optional` **additionalDescriptions**: `string`

Any additional descriptions of the food.

**`Example`**

```ts
"Coon; sharp cheese; Tillamook; Hoop; Pioneer; New York; Wisconsin; Longhorn"
```

#### Defined in

[src/types.ts:253](https://github.com/inji-gg/fooddata-central-api/blob/4f116a9/src/types.ts#L253)

___

### allHighlightFields

• `Optional` **allHighlightFields**: `string`

allHighlightFields

#### Defined in

[src/types.ts:256](https://github.com/inji-gg/fooddata-central-api/blob/4f116a9/src/types.ts#L256)

___

### brandOwner

• `Optional` **brandOwner**: `string`

Brand owner for the food. Only applies to Branded Foods.

**`Example`**

```ts
"Supervalu, Inc."
```

#### Defined in

[src/types.ts:235](https://github.com/inji-gg/fooddata-central-api/blob/4f116a9/src/types.ts#L235)

___

### dataType

• `Optional` **dataType**: [`DataType`](../enums/DataType.md)

The type of the food data.

**`Example`**

```ts
"Branded"
```

#### Defined in

[src/types.ts:214](https://github.com/inji-gg/fooddata-central-api/blob/4f116a9/src/types.ts#L214)

___

### description

• **description**: `string`

The description of the food.

#### Defined in

[src/types.ts:208](https://github.com/inji-gg/fooddata-central-api/blob/4f116a9/src/types.ts#L208)

___

### fdcId

• **fdcId**: `number`

Unique ID of the food.

#### Defined in

[src/types.ts:205](https://github.com/inji-gg/fooddata-central-api/blob/4f116a9/src/types.ts#L205)

___

### foodCode

• `Optional` **foodCode**: `number`

Any unique ID identifying the food within FNDDS.

#### Defined in

[src/types.ts:217](https://github.com/inji-gg/fooddata-central-api/blob/4f116a9/src/types.ts#L217)

___

### foodNutrients

• `Optional` **foodNutrients**: [`AbridgedFoodNutrient`](AbridgedFoodNutrient.md)[]

An array of AbridgedFoodNutrient objects.

#### Defined in

[src/types.ts:220](https://github.com/inji-gg/fooddata-central-api/blob/4f116a9/src/types.ts#L220)

___

### gtinUpc

• `Optional` **gtinUpc**: `string`

GTIN or UPC code identifying the food. Only applies to Branded Foods.

**`Example`**

```ts
"041303020937"
```

#### Defined in

[src/types.ts:241](https://github.com/inji-gg/fooddata-central-api/blob/4f116a9/src/types.ts#L241)

___

### ingredients

• `Optional` **ingredients**: `string`

The list of ingredients (as it appears on the product label). Only applies to Branded Foods.

#### Defined in

[src/types.ts:244](https://github.com/inji-gg/fooddata-central-api/blob/4f116a9/src/types.ts#L244)

___

### ndbNumber

• `Optional` **ndbNumber**: `number`

Unique number assigned for foundation foods. Only applies to Foundation and SRLegacy Foods.

#### Defined in

[src/types.ts:247](https://github.com/inji-gg/fooddata-central-api/blob/4f116a9/src/types.ts#L247)

___

### publishedDate

• `Optional` **publishedDate**: `string`

Date the item was published to FDC.

**`Example`**

```ts
"4/1/2019"
```

#### Defined in

[src/types.ts:226](https://github.com/inji-gg/fooddata-central-api/blob/4f116a9/src/types.ts#L226)

___

### scientificName

• `Optional` **scientificName**: `string`

The scientific name of the food.

#### Defined in

[src/types.ts:229](https://github.com/inji-gg/fooddata-central-api/blob/4f116a9/src/types.ts#L229)

___

### score

• `Optional` **score**: `number`

Relative score indicating how well the food matches the search criteria.

#### Defined in

[src/types.ts:261](https://github.com/inji-gg/fooddata-central-api/blob/4f116a9/src/types.ts#L261)

___

### servingSize

• `Optional` **servingSize**: `number`

Serving Size value. Only relevant for "Branded" foods. The schema defines
another field "servingSizeUnit" - but it always seems to be a no-op. The
serving size is in "grams" even if the "servingSizeUnit" specifies
otherwise.

For other DataType foods. The portion size is always 100g. This will be
set accordingly.

#### Defined in

[src/types.ts:272](https://github.com/inji-gg/fooddata-central-api/blob/4f116a9/src/types.ts#L272)
