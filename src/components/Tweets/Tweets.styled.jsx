import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LoadingMessage = styled.p`
  margin: 20px;
`;

export const ErrorMessage = styled.p`
  margin: 20px;
`;

export const Section = styled.div`
max-width: 1600px;
min-width: 320px;
padding: 15px;
margin-left: auto;
margin-right: auto;

} `;

export const CardContainer = styled.div`
display: flex;
  justify-content: center;
  flex-direction: column;
 `;
 export const TweetsContainer = styled.div`
 display: grid;
 justify-content: center;
 grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
 align-items: center;
 gap: 48px;
 margin-left: auto;
 margin-right: auto;
 padding: auto 40px;
 max-width: 1200px;
`;

export const LoadMoreButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #614385;
  border: none;
  border-radius: 5px;
  font-family: 'Montserrat';
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  }
`;

export const BackLink = styled(Link)`
  display: block;
  margin-top: 20px;
  margin-bottom: 40px;
  color:  #614385;
  text-decoration: none;
`;

