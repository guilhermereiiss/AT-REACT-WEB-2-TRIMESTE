import { useNavigate } from 'react-router-dom';
import "../styles/Home.scss"

const Home = () => {
  const navigate = useNavigate();

  const navegaCentral = () =>{
    navigate('/signin')
  }
  return (
      <div className='container'>
        <button onClick={navegaCentral} className='button'>Inicie o Projeto</button>
      </div>
  )
}

export default Home
