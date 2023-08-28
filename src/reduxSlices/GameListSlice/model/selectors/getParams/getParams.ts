import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "../../../../../providers/StoreProvider";
// export const getGameListParams = (state: StateSchema) => state?.gameList?.params;

const params = (state: StateSchema) => state?.gameList?.params || {};

export const getGameListParams = createSelector(
  [params], (params) => params
)