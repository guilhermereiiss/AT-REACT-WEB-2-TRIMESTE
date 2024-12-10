import { useNavigate } from 'react-router-dom';
import "../styles/NotFound.scss"; 

import ButtonComponent from '../components/Button';
import TextComponent from '../components/typography';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/AT-REACT-WEB-2-TRIMESTE/Central');
  };

  return (
    <div className="not-found-container">
      <TextComponent variant="h3" className="not-found-title">
        404 - Página Não Encontrada
      </TextComponent>
      <TextComponent variant="body1" className="not-found-message">
        A página que você está procurando não existe.
      </TextComponent>

      <ButtonComponent
        variant="contained"
        onClick={handleGoHome}
        className="not-found-button"
      >
        Voltar para a Home
      </ButtonComponent>
    </div>
  );
};

export default NotFound;
