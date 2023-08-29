import { useSelector } from 'react-redux';
import { GamesList } from '../../../components/GamesList';
import { OptionsBlock } from '../../../components/OptionsBlock';
import { Container } from '../../../components/common/Container';
import { StateSchema } from '../../../providers/StoreProvider';
import cls from './MainPage.module.scss'

const MainPage = () => {
  const error = useSelector((state: StateSchema) => state.gameList.error || '');

  return (
    <div>
      <Container>
        <OptionsBlock />
        {
          error ?
            (<div className={cls.errorPlug}>{error}</div>)
          :
            null
        }
        <GamesList />
      </Container>
    </div>
  );
}

export default MainPage;