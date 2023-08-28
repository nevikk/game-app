export interface Game {
  id: number;
  title: string;
  release_date: string;
  publisher: string;
  genre: string;
  thumbnail: string;
  freetogame_profile_url: string;
}

export interface Params {
  platform?: string;
  category?: string;
  sortBy?: string;
}

export interface Param {
  name: string;
  param: string;
}

export interface GameListSchema {
  isLoading?: boolean;
  error?: string;
  data?: Game[];
  paramsNames: Params;
  params: Params;
  rejectCount?: number;
}