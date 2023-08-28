import { useEffect } from 'react';
import { Container } from '../../../components/common/Container';
import { useAppDispatch } from '../../../hooks/useAppDispatch/useAppDispatch';
import { StateSchema } from '../../../providers/StoreProvider';
import cls from './MainPage.module.scss';
import { useSelector } from 'react-redux';
import { getGameList, getGameListData, getGameListParams } from '../../../reduxSlices/GameListSlice';
import { Loader } from '../../../components/common/Loader';
import { GameCard } from '../../../components/GameCard';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const params = useSelector(getGameListParams);
  const isLoading = useSelector((state: StateSchema) => state.gameList.isLoading);
  const error = useSelector((state: StateSchema) => state.gameList.error || '');
  const rejectCount = useSelector((state: StateSchema) => state.gameList.rejectCount || 0);
  const data = useSelector(getGameListData);

  useEffect(() => {
    if (rejectCount < 3) {
      dispatch(getGameList({params, count: rejectCount}));
    }
  }, [dispatch, params, rejectCount]);

  return (
    <div>
      <Container>
        <div className={cls.list}>
          {
            isLoading ?
              <Loader />
            :
              data.map((game, index) => (
                <GameCard key={game.id} game={game} />
              ))
          }
        </div>
      </Container>
    </div>
  );
}

export default MainPage;