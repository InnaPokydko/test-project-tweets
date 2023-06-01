import { FcHome } from 'react-icons/fc';
import { Link } from 'react-router-dom';
// import { Container, HomeLink  } from './NotFound.styled';

const NotFound = () => {
  return (
    <div>
      <Link to={'/'}> 
         <FcHome style={{ marginRight: '10px'}} size={30}></FcHome>
        Back to home
      </Link>
      <img
        src="https://img.freepik.com/free-vector/404-error-web-template-with-funny-monster_23-2147788955.jpg"
        alt="not found"
        width="500"
        height="400"
      />
    </div>
  );
};

export default NotFound;