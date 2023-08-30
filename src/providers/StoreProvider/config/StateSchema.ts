import { AxiosInstance } from 'axios';
import { GameListSchema } from "../../../reduxSlices/GameListSlice";
import { DetailGameSchema } from '../../../reduxSlices/DetailGameSlice';


export interface StateSchema {
  gameList: GameListSchema,
  detailGame: DetailGameSchema
}

// интерфейс для extra внутри ThunkApi у asyncThunk
export interface ThunkExtraArg {
  api: AxiosInstance;
}

// <T> - это дженерик с типом для ошибки
export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
}
