import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';

export const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  
`;

export const Header = styled.header`
  display: flex;
  height: 120px;
   padding: 20px 60px;
   background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
  `;

export const HeaderBox = styled.ul`
width: 100%;
display: flex;
gap: 80px;
justify-content: end;
padding: 30px 60px 0 0;
`;

export const Link = styled(RouterLink)`
  color: #ED8F03;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5rem;
`;