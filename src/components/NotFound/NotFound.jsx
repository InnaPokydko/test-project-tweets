import { FcHome } from 'react-icons/fc';
import { Container, HomeLink  } from './NotFound.styled';

const NotFound = () => {
  return (
    <Container>
      <HomeLink to={'/'}> 
         <FcHome style={{ marginRight: '10px'}} size={30}></FcHome>
        Back to home
      </HomeLink>
      <img
        src="https://img.freepik.com/free-vector/404-error-web-template-with-funny-monster_23-2147788955.jpg"
        alt="not found"
        width="500"
        height="400"
      />
    </Container>
  );
};

export default NotFound;