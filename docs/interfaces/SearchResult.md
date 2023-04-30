[fooddata-central-api](../README.md) / [Exports](../modules.md) / SearchResult

# Interface: SearchResult

## Table of contents

### Properties

- [currentPage](SearchResult.md#currentpage)
- [foodSearchCriteria](SearchResult.md#foodsearchcriteria)
- [foods](SearchResult.md#foods)
- [totalHits](SearchResult.md#totalhits)
- [totalPages](SearchResult.md#totalpages)

## Properties

### currentPage

• **currentPage**: `number`

The current page of results being returned.

#### Defined in

[src/types.ts:290](https://github.com/inji-gg/fooddata-central-api/blob/2c5a8c7/src/types.ts#L290)

___

### foodSearchCriteria

• **foodSearchCriteria**: [`FoodSearchCriteria`](FoodSearchCriteria.md)

A copy of the criteria that were used in the search.

#### Defined in

[src/types.ts:279](https://github.com/inji-gg/fooddata-central-api/blob/2c5a8c7/src/types.ts#L279)

___

### foods

• **foods**: [`SearchResultFood`](SearchResultFood.md)[]

The list of foods found matching the search criteria. See Food Fields
below.

#### Defined in

[src/types.ts:301](https://github.com/inji-gg/fooddata-central-api/blob/2c5a8c7/src/types.ts#L301)

___

### totalHits

• **totalHits**: `number`

The total number of foods found matching the search criteria.

**`Example`**

```ts
1034
```

#### Defined in

[src/types.ts:285](https://github.com/inji-gg/fooddata-central-api/blob/2c5a8c7/src/types.ts#L285)

___

### totalPages

• **totalPages**: `number`

The total number of pages found matching the search criteria.

#### Defined in

[src/types.ts:295](https://github.com/inji-gg/fooddata-central-api/blob/2c5a8c7/src/types.ts#L295)
