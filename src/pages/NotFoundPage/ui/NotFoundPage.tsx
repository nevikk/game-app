import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/common/Button';
import cls from './NotFoundPage.module.scss';

const NotFoundPage = () => {

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/');
  }

  return (
    <div className={cls.NotFoundPage}>
      <div className={cls.body}>
        <h2 className={cls.title}>Страница не найдена</h2>
        <Button onClick={clickHandler}>
          На главную
        </Button>
      </div>
    </div>
  );
}

export default NotFoundPage;