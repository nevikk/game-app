import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../../../../providers/StoreProvider";
import { DetailGame } from "../types/detailGame";

interface getGameListProps {
  id: string;
  count?: number;
  controller: AbortController;
}

interface errorReturn {
  error: string;
  count: number;
}

interface ReturnDetailGame extends DetailGame {
  status?: string;
  short_description?: string;
  description?: string;
  game_url?: string;
  freetogame_profile_url?: string;
  platform?: string;
}

export const getDetailGame = createAsyncThunk<
  DetailGame,
  getGameListProps,
  ThunkConfig<errorReturn>
>(
  'detailGame/getDetailGame',
  async (payload, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI;
    const {
      id,
      count = 0,
      controller
    } = payload;

    try {
      const response = await extra.api.get<ReturnDetailGame>(
        '/game',
        {
          params: { id },
          signal: controller.signal
        }
      );

      if (!response.data.id) {
        return rejectWithValue({ count, error: 'Не удалось загрузить игру' });
      }

      const detailGame = {
        id: response.data.id,
        title: response.data.title,
        thumbnail: response.data.thumbnail,
        genre: response.data.genre,
        publisher: response.data.publisher,
        developer: response.data.developer,
        release_date: response.data.release_date,
        minimum_system_requirements: response.data.minimum_system_requirements,
        screenshots: response.data.screenshots,
      }

      return detailGame;
    } catch (e) {
      return rejectWithValue({ count, error: 'Не удалось загрузить игру' });
    }
  }
)