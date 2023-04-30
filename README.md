# fooddata-central-api

Wrapper over FoodData Central Rest APIs for Typescript

---

## [API Reference](docs/modules.md)

---

## Setup

1. Acquire an API Token from FDC [here](https://fdc.nal.usda.gov/api-guide.html#bkmk-3). Note the [rate limits](https://fdc.nal.usda.gov/api-guide.html#bkmk-4).
2. Expose the API Token as an Environment Variable `FDC_API_KEY`.

---

## Usage

Right now only the Food Search API - [`/v1/foods/search`](https://app.swaggerhub.com/apis/fdcnal/food-data_central_api/1.0.1#/FDC/postFoodsSearch) - is supported

```ts
const searchCriteria: FoodSearchCriteria = {
  query: "milk",
  dataType: [DataType.BRANDED],
  pageSize: 1,
  pageNumber: 1,
  startDate: "2019-01-01",
  endDate: "2023-01-01",
};
const searchResult: SearchResult = await findFood(searchCriteria);
```

---

This api is provided by _U.S. Department of Agriculture, Agricultural Research Service. FoodData Central, 2019. [fdc.nal.usda.gov](https://fdc.nal.usda.gov/)._
