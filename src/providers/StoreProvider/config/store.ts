import { configureStore } from '@reduxjs/toolkit';
import { GameListReducer } from '../../../reduxSlices/GameListSlice';
import { StateSchema } from "./StateSchema";
import { $api } from './api';


export function createReduxStore(initialState?: StateSchema) {
  const rootReducers = {
    gameList: GameListReducer
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