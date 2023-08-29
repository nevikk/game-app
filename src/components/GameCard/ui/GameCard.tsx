import { memo } from 'react';
import { Game } from '../../../reduxSlices/GameListSlice';
import cls from './GameCard.module.scss';
import { formatDate } from '../../../helpers/formatDate/formatDate';
import { Link } from 'react-router-dom';

interface GameCardProps {
  game: Game
}

export const GameCard = memo((props: GameCardProps) => {
  const {
    id,
    title,
    thumbnail,
    genre,
    publisher,
    release_date,
    freetogame_profile_url
  } = props.game;

  return (
    <Link to={`/game/${freetogame_profile_url}`} className={cls.GameCard}>
      <div className={cls.image}>
        <img src={thumbnail} alt="Фото" />
      </div>
      <div className={cls.body}>
        <div className={cls.title}>{title}</div>
        <div>{genre}</div>
        <div className={cls.publisher}>Publisher: {publisher}</div>
        <div>{formatDate(release_date, 'ru')}</div>
      </div>
    </Link>
  );
})