import env from "./env";
import { z } from "zod";
import { FoodSearchCriteria, SearchResult } from "./types";
import { searchResultSchema } from "./types-schema";

const envSchema = z.object({
  FDC_API_KEY: z.string(),
});

const API_URL_BASE = "https://api.nal.usda.gov/fdc";
const SEARCH_API = "v1/foods/search";

/**
 * Returns a list of foods that matched search (query) keywords
 *
 * @remarks Search for foods using keywords. Results can be filtered by
 * dataType and there are options for result page sizes or sorting.
 *
 * @param params - @see {@link FoodSearchCriteria}
 * @returns List of foods that matched search terms
 *
 * @throws On bad input parameters
 */
export const findFood = async (
  params: FoodSearchCriteria
): Promise<SearchResult> => {
  return await fetch(
    `${API_URL_BASE}/${SEARCH_API}?api_key=${env.FDC_API_KEY}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      const result = searchResultSchema.parse(data);
      for (const food of result.foods) {
        food.servingSize = food.servingSize || 100;
      }
      return result;
    });
};
