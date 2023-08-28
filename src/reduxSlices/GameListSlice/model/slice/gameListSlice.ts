import { Param, Params } from './../types/gameList';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game, GameListSchema } from "../types/gameList";
import { category, platforms, sortBy } from "../../../../tools/tools";
import { getGameList } from '../asyncThunks/getGameList';

const initialState: GameListSchema = {
  isLoading: false,
  error: '',
  paramsNames: {
    sortBy: sortBy[0]?.name || '',
    platform: platforms[0]?.name || '',
  },
  params: {
    sortBy: sortBy[0]?.param || '',
    platform: platforms[0]?.param || '',
  }
}

export const gameListSlice = createSlice({
  name: 'gameList',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Game[]>) => {
      state.data = action.payload;
    },
    setSortBy: (state, action: PayloadAction<Param>) => {
      state.params.sortBy = action.payload.param;
      state.paramsNames.sortBy = action.payload.name;
    },
    setPlatform: (state, action: PayloadAction<Param>) => {
      state.params.platform = action.payload.param;
      state.paramsNames.platform = action.payload.name;
    },
    setСategory: (state, action: PayloadAction<Param>) => {
      if (action.payload.param === '') {
        state.params = { sortBy: state.params.sortBy, platform: state.params.platform }
      } else {
        state.params.category = action.payload.param;
      }
      state.paramsNames.category = action.payload.name;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGameList.pending, (state) => {
        state.error = '';
        state.isLoading = true;
      })
      .addCase(getGameList.fulfilled,
        (
          state,
          action: PayloadAction<Game[]>
        ) => {
          state.isLoading = false;
          state.data = action.payload;
        })
      .addCase(getGameList.rejected, (state, action) => {
        state.isLoading = false;
        state.rejectCount = action.payload?.count ? action.payload?.count + 1 : 1;
        state.error = action.payload?.error;
      })
  }
})

export const { actions: GameListActions } = gameListSlice;
export const { reducer: GameListReducer } = gameListSlice;