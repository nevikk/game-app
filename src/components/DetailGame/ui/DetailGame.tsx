import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../hooks/useAppDispatch/useAppDispatch';
import { StateSchema } from '../../../providers/StoreProvider';
import { getDetailGame, getDetailGameData } from '../../../reduxSlices/DetailGameSlice';
import { Loader } from '../../common/Loader';
import cls from './DetailGame.module.scss';
import { formatDate } from '../../../helpers/formatDate/formatDate';
import { classNames } from '../../../helpers/ClassNames/ClassNames';

interface DetailGameProps {
  id: string | undefined;
}

export const DetailGame = memo((props: DetailGameProps) => {
  const {
    id
  } = props;

  const isLoading = useSelector((state: StateSchema) => state.detailGame.isLoading);
  const dispatch = useAppDispatch();
  const rejectCount = useSelector((state: StateSchema) => state.detailGame.rejectCount || 0);
  const game = useSelector(getDetailGameData);

  useEffect(() => {
    if (id) {
      if (rejectCount < 3) {
        dispatch(getDetailGame({id, count: rejectCount}));
      }
    }
  }, [dispatch, id, rejectCount]);

  if (isLoading) return <Loader />

  return (
    <div className={cls.DetailGame}>
      <div className={cls.leftColumn}>
        <div className={cls.avatar}>
          <img src={game.thumbnail} alt="Фото" />
        </div>
        <div className={cls.info}>
          <div className={cls.genre}>Genre: {game.genre}</div>
          <div className={cls.release}>Release Date: {formatDate(game.release_date, 'ru')}</div>
          {
            game.developer ?
            <div className={cls.developer}>Developer: {game.developer}</div>
            : null
          }
          <div className={cls.publisher}>Publisher: {game.publisher}</div>
        </div>
      </div>
      <div className={cls.rightColumn}>
        <h2 className={cls.title}>{game.title}</h2>
        <div className={cls.carousel}>
        </div>
        {
        game.minimum_system_requirements ?
          <div className={cls.requirements}>
            <div className={classNames(cls.title, {}, [cls.reqTitle])}>Minimum System Requirements</div>
            {Object.entries(game.minimum_system_requirements).map(([key, requirement]) => (
              <div key={key} className={cls.requirement}>{key}: {requirement}</div>
            ))}
          </div>
          : null
        }
      </div>
    </div>
  );
})