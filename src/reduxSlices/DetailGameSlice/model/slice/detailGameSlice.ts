import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DetailGame, DetailGameSchema } from "../types/detailGame";
import { getDetailGame } from "../asyncThunks/getDetailGame";

const initialState: DetailGameSchema = {
  isLoading: false,
  error: '',
}

export const detailGameSlice = createSlice({
  name: 'detailGame',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<DetailGame>) => {
      state.data = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDetailGame.pending, (state) => {
        state.error = '';
        state.isLoading = true;
      })
      .addCase(getDetailGame.fulfilled,
        (
          state,
          action: PayloadAction<DetailGame>
        ) => {
          state.isLoading = false;
          state.data = action.payload;
        })
      .addCase(getDetailGame.rejected, (state, action) => {
        state.isLoading = false;
        state.rejectCount = action.payload?.count ? action.payload?.count + 1 : 1;
        state.error = action!.payload!.error;
      })
  }
})

export const { actions: DetailGameActions } = detailGameSlice;
export const { reducer: DetailGameReducer } = detailGameSlice;