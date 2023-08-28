import { RouteProps } from "react-router-dom"
import { MainPage } from "../../../pages/MainPage"
import { GamePage } from "../../../pages/GamePage"
import { NotFoundPage } from "../../../pages/NotFoundPage"

export enum AppRoutes {
  MAIN = 'main',
  GAME = 'game',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.GAME]: '/game/:id',
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoutes.GAME]: {
    path: RoutePath.game,
    element: <GamePage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  },
}