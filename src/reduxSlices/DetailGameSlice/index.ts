import { getDetailGameData } from './model/selectors/getData';
import { getDetailGame } from './model/asyncThunks/getDetailGame';
import { DetailGameSchema, Requirements, Screenshot, DetailGame } from './model/types/detailGame';
import { DetailGameActions, DetailGameReducer } from "./model/slice/detailGameSlice";



export {
  DetailGameActions,
  DetailGameReducer,
  getDetailGame,
  getDetailGameData
};
export type {
  DetailGameSchema,
  Requirements,
  Screenshot,
  DetailGame,
};
