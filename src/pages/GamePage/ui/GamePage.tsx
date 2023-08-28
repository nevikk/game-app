import { useParams } from 'react-router-dom';
import cls from './GamePage.module.scss';
import { Container } from '../../../components/common/Container';

interface GamePageProps {
  className?: string;
}

const GamePage = () => {
  const { id } = useParams();

  return (
    <div>
      <Container>
        GamePage {id}
      </Container>
    </div>
  );
}

export default GamePage;