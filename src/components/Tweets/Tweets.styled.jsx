import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LoadingMessage = styled.p`
  margin: 20px;
`;

export const ErrorMessage = styled.p`
  margin: 20px;
`;

export const TweetsContainer = styled.div`
display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 48px;
 `;

export const LoadMoreButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #EBD8FF;
  border: none;
  border-radius: 5px;
  font-family: 'Montserrat';
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  cursor: pointer;
`;

export const BackLink = styled(Link)`
  display: block;
  margin-top: 20px;
  color:  #614385;
  text-decoration: none;
`;

export const CardContainer = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
gap: 48px;
width: 100%; 

 `;