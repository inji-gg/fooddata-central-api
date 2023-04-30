[fooddata-central-api](README.md) / Exports

# fooddata-central-api

## Table of contents

### Enumerations

- [DataType](enums/DataType.md)
- [FoodNutrientUnit](enums/FoodNutrientUnit.md)
- [SortBy](enums/SortBy.md)
- [SortOrder](enums/SortOrder.md)
- [TradeChannel](enums/TradeChannel.md)

### Interfaces

- [AbridgedFoodNutrient](interfaces/AbridgedFoodNutrient.md)
- [FoodSearchCriteria](interfaces/FoodSearchCriteria.md)
- [SearchResult](interfaces/SearchResult.md)
- [SearchResultFood](interfaces/SearchResultFood.md)

### Functions

- [findFood](modules.md#findfood)

## Functions

### findFood

▸ **findFood**(`params`): `Promise`<[`SearchResult`](interfaces/SearchResult.md)\>

Returns a list of foods that matched search (query) keywords

**`Remarks`**

Search for foods using keywords. Results can be filtered by
dataType and there are options for result page sizes or sorting.

**`See`**

[FoodSearchCriteria](interfaces/FoodSearchCriteria.md)

**`Throws`**

On bad input parameters

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`FoodSearchCriteria`](interfaces/FoodSearchCriteria.md) |

#### Returns

`Promise`<[`SearchResult`](interfaces/SearchResult.md)\>

List of foods that matched search terms

#### Defined in

[src/api.ts:24](https://github.com/inji-gg/fooddata-central-api/blob/2c5a8c7/src/api.ts#L24)
