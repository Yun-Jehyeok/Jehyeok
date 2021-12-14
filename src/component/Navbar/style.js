import styled from 'styled-components';

export const NavContainer = styled.nav`
  top: ${(props) => props.home};
  left: 0;
  position: fixed;
  background: #1b242f;
  border-bottom: 3px solid #04c2c9;
  height: 50px;
  text-align: left;
  width: 100%;
  z-index: 99;

  display: flex;
  align-items: center;
`;

export const NavItemBox = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 10%;

  transition: all 0.5s;

  & div {
    color: white;
    margin-right: 48px;
    cursor: pointer;

    &:hover {
      color: #e21a6d;
    }
  }
`;
