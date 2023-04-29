export enum FoodNutrientUnit {
  G = "G",
  MG = "MG",
  UG = "UG",
  IU = "IU",
  KCAL = "KCAL",
  KJ = "KJ",
  PH = "PH",
  MCG_RE = "MCG_RE",
  UMOL_TE = "UMOL_TE",
  SP_GR = "SP_GR",
  MG_ATE = "MG_ATE",
  MG_GAE = "MG_GAE",
  kJ = "kJ",
}

export enum DataType {
  BRANDED = "Branded",
  FOUNDATION = "Foundation",
  SURVEY_FNDDS = "Survey (FNDDS)",
  SR_LEGACY = "SR Legacy",
}

export enum SortBy {
  DATA_TYPE = "dataType.keyword",
  DESCRIPTION = "lowercaseDescription.keyword",
  FDC_ID = "fdcId",
  PUBLISHED_DATE = "publishedDate",
}

export enum SortOrder {
  ASC = "asc",
  DESC = "desc",
}

export enum TradeChannel {
  CHILD_NUTRITION_FOOD_PROGRAMS = "CHILD_NUTRITION_FOOD_PROGRAMS",
  DRUG = "DRUG",
  FOOD_SERVICE = "FOOD_SERVICE",
  GROCERY = "GROCERY",
  MASS_MERCHANDISING = "MASS_MERCHANDISING",
  MILITARY = "MILITARY",
  ONLINE = "ONLINE",
  VENDING = "VENDING",
}

export interface FoodSearchCriteria {
  /**
   * Search terms to use in the search. The string may also include standard
   * {@link https://fdc.nal.usda.gov/help.html#bkmk-2 | search operators}.
   *
   * Quotation Marks(""): Search for an exact phrase
   * > "green pepper" will only match green pepper products, not
   * anything with the word “green” or “pepper” in it.
   *
   * Plus Size(+): Makes a word required
   * > * candy corn matches all foods with “candy” or “corn”.
   * > * +candy corn matches only foods that have “candy” and weighs the foods
   * that have “corn” higher than those that don’t.
   * > * +candy +corn matches only foods that have both “candy” and “corn”.
   *
   * Minus Size(-): Excludes a word
   * > candy -chocolate matches “candy” that doesn’t have “chocolate”.
   *
   * Asterisk(*): Match any non-whitespace character
   * > *berry matches all foods with “berry” at the end of their name.
   *
   * Parentheses(): Signify precedence / Denote grouping
   * > * pizza -(pepperoni sausage) matches all pizza with neither pepperoni
   * nor sausage.
   * > * Unmatched parentheses will cause error during search.
   *
   * Colon(:): Match words in a particular data element
   * > * description:skor only matches foods that have “skor” in their
   * description.
   * > * additionalDescriptions:candy only matches foods that have “candy” in
   * at least one of their additional descriptions.
   * > * commonNames:"hot dog" only matches foods that have the phrase “hot dog”
   * in at least one of their common names.
   * > * scientificName:beta only matches foods that have “beta” in their
   * scientific name.
   *
   * requireAllWords: When checked, the search will only return foods that
   * contain all of the words that were entered in the search field.
   */
  query: string;

  /**
   * Optional. Filter on a specific data type; specify one or more values in an
   * array.
   * @minItems 1
   * @maxItems 4
   * @example ["Branded", "Foundation"]
   */
  dataType?: DataType[];

  /**
   * Optional. Maximum number of results to return for the current page.
   * Default is 50.
   * @minimum 1
   * @maximum 200
   * @example 25
   */
  pageSize?: number;

  /**
   * Optional. Page number to retrieve. The offset into the overall result set
   * is expressed as (pageNumber * pageSize)
   * @example 2
   */
  pageNumber?: number;

  /**
   * Optional. Specify one of the possible values to sort by that field. Note,
   * dataType.keyword will be dataType and description.keyword will be
   * description in future releases.
   * @example "dataType.keyword"
   */
  sortBy?: SortBy;

  /**
   * Optional. The sort direction for the results. Only applicable if sortBy
   * is specified.
   * @example "asc"
   */
  sortOrder?: SortOrder;

  /**
   * Optional. Filter results based on the brand owner of the food. Only
   * applies to Branded Foods.
   * @example "Kar Nut Products Company"
   */
  brandOwner?: string;

  /**
   * Optional. Filter foods containing any of the specified trade channels.
   * @minItems 1
   * @maxItems 3
   * @example [“CHILD_NUTRITION_FOOD_PROGRAMS”, “GROCERY”]
   */
  tradeChannel?: TradeChannel[];

  /**
   * Filter foods published on or after this date. Format: YYYY-MM-DD
   * @example "2021-12-01"
   */
  startDate?: string;

  /**
   * Filter foods published on or before this date. Format: YYYY-MM-DD
   * @example "2021-12-30"
   */
  endDate?: string;

  /**
   * When checked, the search will only return foods that contain all of the
   * words that were entered in the search field.
   */
  requireAllWords?: boolean;
}

export interface AbridgedFoodNutrient {
  /** A unique identifier for the nutrient */
  nutrientId: number;

  /**
   * The name of the nutrient.
   * @example "Iron, Fe"
   */
  nutrientName?: string;

  /**
   * The number representing the nutrient.
   * @example 303
   */
  nutrientNumber: string;

  /**
   * The unit name of the nutrient.
   * @example "mg"
   */
  unitName: FoodNutrientUnit;

  /**
   * The amount of the nutrient.
   * @example 0.53
   */
  value?: number;

  /**
   * The derivation code of the nutrient.
   * @example "LCCD"
   */
  derivationCode?: string;

  /**
   * The derivation description of the nutrient.
   * @example "Calculated from a daily value percentage per serving size measure"
   */
  derivationDescription?: string;
}

export interface SearchResultFood {
  /** Unique ID of the food. */
  fdcId: number;

  /** The description of the food. */
  description: string;

  /**
   * The type of the food data.
   * @example "Branded"
   */
  dataType?: DataType;

  /** Any unique ID identifying the food within FNDDS. */
  foodCode?: number;

  /** An array of AbridgedFoodNutrient objects. */
  foodNutrients?: AbridgedFoodNutrient[];

  /**
   * Date the item was published to FDC.
   * @example "4/1/2019"
   */
  publishedDate?: string;

  /** The scientific name of the food. */
  scientificName?: string;

  /**
   * Brand owner for the food. Only applies to Branded Foods.
   * @example "Supervalu, Inc."
   */
  brandOwner?: string;

  /**
   * GTIN or UPC code identifying the food. Only applies to Branded Foods.
   * @example "041303020937"
   */
  gtinUpc?: string;

  /** The list of ingredients (as it appears on the product label). Only applies to Branded Foods. */
  ingredients?: string;

  /** Unique number assigned for foundation foods. Only applies to Foundation and SRLegacy Foods. */
  ndbNumber?: number;

  /**
   * Any additional descriptions of the food.
   * @example "Coon; sharp cheese; Tillamook; Hoop; Pioneer; New York; Wisconsin; Longhorn"
   */
  additionalDescriptions?: string;

  /** allHighlightFields */
  allHighlightFields?: string;

  /**
   * Relative score indicating how well the food matches the search criteria.
   */
  score?: number;

  /**
   * Serving Size value. Only relevant for "Branded" foods. The schema defines
   * another field "servingSizeUnit" - but it always seems to be a no-op. The
   * serving size is in "grams" even if the "servingSizeUnit" specifies
   * otherwise.
   *
   * For other DataType foods. The portion size is always 100g. This will be
   * set accordingly.
   */
  servingSize?: number;
}

export interface SearchResult {
  /**
   * A copy of the criteria that were used in the search.
   */
  foodSearchCriteria: FoodSearchCriteria;

  /**
   * The total number of foods found matching the search criteria.
   * @example 1034
   */
  totalHits: number;

  /**
   * The current page of results being returned.
   */
  currentPage: number;

  /**
   * The total number of pages found matching the search criteria.
   */
  totalPages: number;

  /**
   * The list of foods found matching the search criteria. See Food Fields
   * below.
   */
  foods: SearchResultFood[];
}
