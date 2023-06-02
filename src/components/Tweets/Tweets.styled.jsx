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
padding-left: 15px;
padding-right: 15px;
margin-left: auto;
margin-right: auto;
}
@media screen and (min-width: 480px) {
.container {
  width: 480px;
}
}
@media screen and (min-width: 768px) {
.container {
  width: 768px;
}
}
@media screen and (min-width: 1200px) {
.container {
  width: 1200px;
}
 `;

export const CardContainer = styled.div`
;
 `;
export const TweetsContainer = styled.div`
display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 48px;

  > div {
    flex-basis: calc((100% - 96px) / 2);
  }
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
  margin-bottom: 40px;
  color:  #614385;
  text-decoration: none;
`;

