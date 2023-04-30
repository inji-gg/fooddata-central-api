[fooddata-central-api](../README.md) / [Exports](../modules.md) / FoodSearchCriteria

# Interface: FoodSearchCriteria

## Table of contents

### Properties

- [brandOwner](FoodSearchCriteria.md#brandowner)
- [dataType](FoodSearchCriteria.md#datatype)
- [endDate](FoodSearchCriteria.md#enddate)
- [pageNumber](FoodSearchCriteria.md#pagenumber)
- [pageSize](FoodSearchCriteria.md#pagesize)
- [query](FoodSearchCriteria.md#query)
- [requireAllWords](FoodSearchCriteria.md#requireallwords)
- [sortBy](FoodSearchCriteria.md#sortby)
- [sortOrder](FoodSearchCriteria.md#sortorder)
- [startDate](FoodSearchCriteria.md#startdate)
- [tradeChannel](FoodSearchCriteria.md#tradechannel)

## Properties

### brandOwner

• `Optional` **brandOwner**: `string`

Optional. Filter results based on the brand owner of the food. Only
applies to Branded Foods.

**`Example`**

```ts
"Kar Nut Products Company"
```

#### Defined in

[src/types.ts:133](https://github.com/inji-gg/fooddata-central-api/blob/4f116a9/src/types.ts#L133)

___

### dataType

• `Optional` **dataType**: [`DataType`](../enums/DataType.md)[]

Optional. Filter on a specific data type; specify one or more values in an
array.

**`Min Items`**

1

**`Max Items`**

4

**`Example`**

```ts
["Branded", "Foundation"]
```

#### Defined in

[src/types.ts:95](https://github.com/inji-gg/fooddata-central-api/blob/4f116a9/src/types.ts#L95)

___

### endDate

• `Optional` **endDate**: `string`

Filter foods published on or before this date. Format: YYYY-MM-DD

**`Example`**

```ts
"2021-12-30"
```

#### Defined in

[src/types.ts:153](https://github.com/inji-gg/fooddata-central-api/blob/4f116a9/src/types.ts#L153)

___

### pageNumber

• `Optional` **pageNumber**: `number`

Optional. Page number to retrieve. The offset into the overall result set
is expressed as (pageNumber * pageSize)

**`Example`**

```ts
2
```

#### Defined in

[src/types.ts:111](https://github.com/inji-gg/fooddata-central-api/blob/4f116a9/src/types.ts#L111)

___

### pageSize

• `Optional` **pageSize**: `number`

Optional. Maximum number of results to return for the current page.
Default is 50.

**`Minimum`**

1

**`Maximum`**

200

**`Example`**

```ts
25
```

#### Defined in

[src/types.ts:104](https://github.com/inji-gg/fooddata-central-api/blob/4f116a9/src/types.ts#L104)

___

### query

• **query**: `string`

Search terms to use in the search. The string may also include standard
[search operators](https://fdc.nal.usda.gov/help.html#bkmk-2).

Quotation Marks(""): Search for an exact phrase
> "green pepper" will only match green pepper products, not
anything with the word “green” or “pepper” in it.

Plus Size(+): Makes a word required
> * candy corn matches all foods with “candy” or “corn”.
> * +candy corn matches only foods that have “candy” and weighs the foods
that have “corn” higher than those that don’t.
> * +candy +corn matches only foods that have both “candy” and “corn”.

Minus Size(-): Excludes a word
> candy -chocolate matches “candy” that doesn’t have “chocolate”.

Asterisk(*): Match any non-whitespace character
> *berry matches all foods with “berry” at the end of their name.

Parentheses(): Signify precedence / Denote grouping
> * pizza -(pepperoni sausage) matches all pizza with neither pepperoni
nor sausage.
> * Unmatched parentheses will cause error during search.

Colon(:): Match words in a particular data element
> * description:skor only matches foods that have “skor” in their
description.
> * additionalDescriptions:candy only matches foods that have “candy” in
at least one of their additional descriptions.
> * commonNames:"hot dog" only matches foods that have the phrase “hot dog”
in at least one of their common names.
> * scientificName:beta only matches foods that have “beta” in their
scientific name.

requireAllWords: When checked, the search will only return foods that
contain all of the words that were entered in the search field.

#### Defined in

[src/types.ts:86](https://github.com/inji-gg/fooddata-central-api/blob/4f116a9/src/types.ts#L86)

___

### requireAllWords

• `Optional` **requireAllWords**: `boolean`

When checked, the search will only return foods that contain all of the
words that were entered in the search field.

#### Defined in

[src/types.ts:159](https://github.com/inji-gg/fooddata-central-api/blob/4f116a9/src/types.ts#L159)

___

### sortBy

• `Optional` **sortBy**: [`SortBy`](../enums/SortBy.md)

Optional. Specify one of the possible values to sort by that field. Note,
dataType.keyword will be dataType and description.keyword will be
description in future releases.

**`Example`**

```ts
"dataType.keyword"
```

#### Defined in

[src/types.ts:119](https://github.com/inji-gg/fooddata-central-api/blob/4f116a9/src/types.ts#L119)

___

### sortOrder

• `Optional` **sortOrder**: [`SortOrder`](../enums/SortOrder.md)

Optional. The sort direction for the results. Only applicable if sortBy
is specified.

**`Example`**

```ts
"asc"
```

#### Defined in

[src/types.ts:126](https://github.com/inji-gg/fooddata-central-api/blob/4f116a9/src/types.ts#L126)

___

### startDate

• `Optional` **startDate**: `string`

Filter foods published on or after this date. Format: YYYY-MM-DD

**`Example`**

```ts
"2021-12-01"
```

#### Defined in

[src/types.ts:147](https://github.com/inji-gg/fooddata-central-api/blob/4f116a9/src/types.ts#L147)

___

### tradeChannel

• `Optional` **tradeChannel**: [`TradeChannel`](../enums/TradeChannel.md)[]

Optional. Filter foods containing any of the specified trade channels.

**`Min Items`**

1

**`Max Items`**

3

**`Example`**

```ts
[“CHILD_NUTRITION_FOOD_PROGRAMS”, “GROCERY”]
```

#### Defined in

[src/types.ts:141](https://github.com/inji-gg/fooddata-central-api/blob/4f116a9/src/types.ts#L141)
