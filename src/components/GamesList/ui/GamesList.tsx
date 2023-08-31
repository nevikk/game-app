import { useSelector } from 'react-redux';
import cls from './GamesList.module.scss';
import { StateSchema } from '../../../providers/StoreProvider';
import { useAppDispatch } from '../../../hooks/useAppDispatch/useAppDispatch';
import { getGameList, getGameListData, getGameListParams } from '../../../reduxSlices/GameListSlice';
import { memo, useEffect } from 'react';
import { Loader } from '../../common/Loader';
import { GameCard } from '../../GameCard';

export const GamesList = memo(() => {
  const isLoading = useSelector((state: StateSchema) => state.gameList.isLoading);
  const dispatch = useAppDispatch();
  const params = useSelector(getGameListParams);
  
  const rejectCount = useSelector((state: StateSchema) => state.gameList.rejectCount || 0);
  const data = useSelector(getGameListData);

  useEffect(() => {
    const controller = new AbortController();

    if (rejectCount < 3) {
      dispatch(getGameList({params, count: rejectCount, controller: controller}));
    }

    return () => {
      controller.abort();
    }
  }, [dispatch, params, rejectCount]);
  return (
    <>
      {
        isLoading ?
          <Loader />
        :
        <div className={cls.list}>
          {data.map((game, index) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      }
    </>
  );
})