import dotenv from "dotenv";
dotenv.config();

import tap from "tap";
import { findFood } from "../api";
import { DataType } from "../types";

tap.test("isSearchMatch_Foundation", (t: Tap.Test) =>
  findFood({
    query: "milk",
    dataType: [DataType.FOUNDATION],
    pageSize: 1,
    pageNumber: 1,
    startDate: "2019-01-01",
    endDate: "2023-01-01",
  }).then((result) => t.matchSnapshot(result, "isSearchMatch_Foundation"))
);

tap.test("isSearchMatch_Branded", (t: Tap.Test) =>
  findFood({
    query: "milk",
    dataType: [DataType.BRANDED],
    pageSize: 1,
    pageNumber: 1,
    startDate: "2019-01-01",
    endDate: "2023-01-01",
  }).then((result) => t.matchSnapshot(result, "isSearchMatch_Branded"))
);

tap.test("isSearchMatch_SurveyFNDDS", (t: Tap.Test) =>
  findFood({
    query: "milk",
    dataType: [DataType.SURVEY_FNDDS],
    pageSize: 1,
    pageNumber: 1,
    startDate: "2019-01-01",
    endDate: "2023-01-01",
  }).then((result) => t.matchSnapshot(result, "isSearchMatch_SurveyFNDDS"))
);

tap.test("isSearchMatch_SRLegacy", (t: Tap.Test) =>
  findFood({
    query: "milk",
    dataType: [DataType.SR_LEGACY],
    pageSize: 1,
    pageNumber: 1,
    startDate: "2019-01-01",
    endDate: "2023-01-01",
  }).then((result) => t.matchSnapshot(result, "isSearchMatch_SRLegacy"))
);
