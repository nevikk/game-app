import { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../hooks/useAppDispatch/useAppDispatch';
import { StateSchema } from '../../../providers/StoreProvider';
import { DetailGameActions, getDetailGame, getDetailGameData } from '../../../reduxSlices/DetailGameSlice';
import { Loader } from '../../common/Loader';
import cls from './DetailGame.module.scss';
import { formatDate } from '../../../helpers/formatDate/formatDate';
import { classNames } from '../../../helpers/ClassNames/ClassNames';
import { MyCarousel } from '../../common/MyCarousel';
import { useCookies } from "react-cookie";


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
  const error = useSelector((state: StateSchema) => state.detailGame.error || '');
  const game = useSelector(getDetailGameData);

  const [{detailGame: cookieDetailGame}, setCookie] = useCookies(['detailGame']);

  console.log('cookieDetailGame', cookieDetailGame);
  

  useEffect(() => {
    const controller = new AbortController();
    
    async function getGameFromServer(id: string) {
        if (rejectCount < 3) {
          const response = await dispatch(getDetailGame({id, count: rejectCount, controller: controller}));

          if (response.meta.requestStatus === 'fulfilled') {
            const gameData = response.payload;
            let date = new Date();
            date = new Date(date.setMinutes(date.getMinutes() + 5));
            console.log('date', date);

            const objectToSave = cookieDetailGame ? {...cookieDetailGame, [id]: {...gameData}} : {[id]: {...gameData}}
            
            setCookie(
              "detailGame",
              JSON.stringify(objectToSave),
              { 
                expires : date
              }
            );
          }

        }
      
    }

    if (id) {
      if (cookieDetailGame) {
        cookieDetailGame[id] ? dispatch(DetailGameActions.setData(cookieDetailGame[id])) : getGameFromServer(id);
      } else {
        getGameFromServer(id);
      }
    }

    return () => {
      controller.abort();
    }
    
  }, [dispatch, id, rejectCount]);

  if (isLoading) return <Loader />

  if (error) return (
    <div className={cls.errorPlug}>
      {error}
    </div>
  )

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
          {game.screenshots ?
            <MyCarousel 
              slides={game.screenshots}
            />
          : null}
        </div>
        {
        game.minimum_system_requirements ?
          <div className={cls.requirements}>
            <div className={classNames(cls.title, {}, [cls.reqTitle])}>Minimum System Requirements</div>
            {Object.entries(game.minimum_system_requirements).map(([key, requirement]) => (
              <div key={key} className={cls.requirement}>
                <span className={cls.key}>{key}:</span>
                <span>{requirement}</span>
              </div>
            ))}
          </div>
          : null
        }
      </div>
    </div>
  );
})