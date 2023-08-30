export interface Requirements {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}

export interface Screenshot {
  id: number;
  image: string;
}

export interface DetailGame {
  id?: number;
  title?: string;
  thumbnail?: string;
  genre?: string;
  publisher?: string;
  developer?: string;
  release_date?: string;
  minimum_system_requirements?: Requirements;
  screenshots?: Screenshot[];
}

export interface DetailGameSchema {
  isLoading: boolean;
  error: string;
  rejectCount?: number;
  data?: DetailGame
}