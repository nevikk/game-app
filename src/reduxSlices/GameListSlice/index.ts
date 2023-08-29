import { getGameListparamsNames } from './model/selectors/getParamsName/getParamsName';
import { getGameListData } from './model/selectors/getData/getData';
import { getGameListParams } from './model/selectors/getParams/getParams';
import { getGameList } from './model/asyncThunks/getGameList';
import { GameListActions, GameListReducer } from './model/slice/gameListSlice';
import { Game, GameListSchema, Params, Param } from './model/types/gameList';

export type {
  Game,
  GameListSchema,
  Params,
  Param
}
export {
  GameListActions,
  GameListReducer,
  getGameList,
  getGameListParams,
  getGameListData,
  getGameListparamsNames
}