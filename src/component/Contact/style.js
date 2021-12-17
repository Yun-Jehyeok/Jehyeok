import styled from 'styled-components';

export const ContactContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #252934;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ContactHeader = styled.div`
  font-size: 30pt;
  font-weight: bold;
`;

export const ContactWrap = styled.div`
  margin-top: 32px;

  & > h2 {
    margin-top: 32px;
  }

  & a {
    color: #04c2c9;
  }
`;

export const UpArrow = styled.img`
  cursor: pointer;
  position: fixed;
  bottom: ${(props) => props.home};

  &:hover {
    margin-bottom: 8px;
  }
`;
