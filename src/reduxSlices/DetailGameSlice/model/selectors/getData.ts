import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "../../../../providers/StoreProvider";
// export const getGameListParams = (state: StateSchema) => state?.gameList?.params;

const data = (state: StateSchema) => state?.detailGame?.data || {};

export const getDetailGameData = createSelector(
  [data], (data) => data
)