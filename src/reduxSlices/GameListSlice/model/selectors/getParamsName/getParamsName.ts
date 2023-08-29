import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "../../../../../providers/StoreProvider";
// export const getGameListParams = (state: StateSchema) => state?.gameList?.params;

const paramsNames = (state: StateSchema) => state?.gameList?.paramsNames || {};

export const getGameListparamsNames = createSelector(
  [paramsNames], (paramsNames) => paramsNames
)