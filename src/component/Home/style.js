import styled from 'styled-components';
import Background from './background.jpg';

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${Background});
  background-size: 100vw 100vh;
  color: white;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const Intro = styled.div`
  font-size: 48px;
`;

export const Name = styled.span`
  color: #e21a6d;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;

  & div {
    width: 196px;
    height: 48px;
    border: 3px solid white;
    font-size: 24px;
    line-height: 48px;
    cursor: pointer;

    transition: all 0.5s;

    &:hover {
      background-color: #e21a6d;
      border: 3px solid #e21a6d;
    }
  }
`;
