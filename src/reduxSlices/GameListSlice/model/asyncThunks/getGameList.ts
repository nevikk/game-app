import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../../../../providers/StoreProvider";
import { Game, Params } from "../types/gameList";

interface getGameListProps {
  params: Params;
  count?: number;
}

interface errorReturn {
  error: string;
  count: number;
}

export const getGameList = createAsyncThunk<
  Game[],
  getGameListProps,
  ThunkConfig<errorReturn>
>(
  'gameList/getGameList',
  async (payload, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI;
    const {
      params,
      count = 0
    } = payload;

    try {
      const response = await extra.api.get<Game[]>(
        '/games',
        { params: { ...params } }
      );

      const gameList = response.data.map(game => {
        return {
          id: game.id,
          title: game.title,
          release_date: game.release_date,
          publisher: game.publisher,
          genre: game.genre,
          thumbnail: game.thumbnail,
          freetogame_profile_url: game.freetogame_profile_url.split('/').slice(-1)[0]
        }
      })

      return gameList;
    } catch (e) {
      return rejectWithValue({ count, error: 'Не удалось загрузить игры' });
    }
  }
)