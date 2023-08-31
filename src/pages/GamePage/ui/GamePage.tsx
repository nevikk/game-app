import { useParams } from 'react-router-dom';
import { DetailGame } from '../../../components/DetailGame';
import { Container } from '../../../components/common/Container';
import { Button } from '../../../components/common/Button';
import { Link } from 'react-router-dom';
import cls from './GamePage.module.scss';

const GamePage = () => {
  const { id } = useParams();

  return (
    <div>
      <Container className={cls.container}>
        <Link to={'/'}>
          <Button>
            {'Вернуться к списку игр'}
          </Button>
        </Link>
        <DetailGame id={id} />
      </Container>
    </div>
  );
}

export default GamePage;