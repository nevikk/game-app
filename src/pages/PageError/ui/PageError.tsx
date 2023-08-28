import { Button } from '../../../components/common/Button';
import cls from './PageError.module.scss';


export const PageError = () => {

  const reloadPage = () => {
    window.location.reload();
  }

  return (
    <div className={cls.PageError}>
      <div className={cls.body}>
        <h2 className={cls.title}>Что-то пошло не так</h2>
        <Button
          onClick={reloadPage}
        >
          Перезагрузить страницу
        </Button>
      </div>
    </div>
  );
}