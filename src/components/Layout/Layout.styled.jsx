import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';

export const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  height: 80px;
  padding: 20px 50px;
  background-image: linear-gradient(
    to right,
    #614385 0%,
    #516395 51%,
    #614385 100%
  );
  //   background-size: cover;
  //   background-position: center;
  //   background-repeat: no-repeat;
`;

export const HeaderBox = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding: 0px 20px;
  color: #3c322d;
  font-size: 25px;
  font-weight: 700px;
`;

export const Link = styled(RouterLink)`
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 700;
  font-size: 24px;
  color: #ffff;

  transition: color 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    color: #fff;
    background-image: linear-gradient(to right, #5614B0 0%, #DBD65C 51%, #5614B0 100%);
    box-shadow: inset 0px 2px 4px rgb(244 0 255 / 30%),
      inset 0px 4px 8px rgb(127 0 255 / 30%),
      inset 0px 8px 16px rgb(255 0 240 / 30%);
    transition: 0.2s;
    transform: translateY(2px);
  }
  `;
