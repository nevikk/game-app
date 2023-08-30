import { useParams } from 'react-router-dom';
import cls from './GamePage.module.scss';
import { Container } from '../../../components/common/Container';
import { DetailGame } from '../../../components/DetailGame';

interface GamePageProps {
  className?: string;
}

const GamePage = () => {
  const { id } = useParams();

  return (
    <div>
      <Container>
        <DetailGame id={id} />
      </Container>
    </div>
  );
}

export default GamePage;