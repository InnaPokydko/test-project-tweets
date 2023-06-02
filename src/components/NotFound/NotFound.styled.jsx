import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
display: flex;
margin: 60px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 30px;
`;

export const HomeLink = styled(Link)`
    color: #614385;
  font-size: 18px;
 `;