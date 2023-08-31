import { useParams } from 'react-router-dom';
import { DetailGame } from '../../../components/DetailGame';
import { Container } from '../../../components/common/Container';

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