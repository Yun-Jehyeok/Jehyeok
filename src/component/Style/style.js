import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  padding: 96px;
  padding-left: 10%;
`;

export const Header = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: bold;
`;

export const BorderBottom = styled.div`
  display: flex;
  justify-content: center;

  & > div {
    width: 90px;
    height: 4px;
    background-color: black;
  }
`;
