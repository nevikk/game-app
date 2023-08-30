import { configureStore } from '@reduxjs/toolkit';
import { GameListReducer } from '../../../reduxSlices/GameListSlice';
import { StateSchema } from "./StateSchema";
import { $api } from './api';
import { DetailGameReducer } from '../../../reduxSlices/DetailGameSlice';


export function createReduxStore(initialState?: StateSchema) {
  const rootReducers = {
    gameList: GameListReducer,
    detailGame: DetailGameReducer
  }

  const store = configureStore({
    reducer: rootReducers,
    preloadedState: initialState,

    middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
        }
      }
    })
  })



  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];