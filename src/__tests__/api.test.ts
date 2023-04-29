import dotenv from "dotenv";
dotenv.config();

import tap from "tap";
import { findFood } from "../api";
import { DataType, SearchResult } from "../types";

tap.matchSnapshot(async (): Promise<SearchResult> => {
  return await findFood({
    query: "milk",
    dataType: [DataType.FOUNDATION],
    pageSize: 1,
    pageNumber: 1,
  });
}, "isSearchMatch_Foundation");
