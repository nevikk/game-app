import { useNavigate } from 'react-router-dom';
import { Container } from '../../common/Container';
import cls from './Navbar.module.scss';
import { memo } from 'react';

export const Navbar = memo(() => {

    const navigate = useNavigate();
    
    const logoClickHandler = () => {
      navigate('/');
    }
  
    return (
      <div className={cls.Navbar}>
        <Container>
          <div className={cls.content}>
            <button 
              className={cls.logo} 
              onClick={logoClickHandler}
            />
          </div>
        </Container>
      </div>
    );
})