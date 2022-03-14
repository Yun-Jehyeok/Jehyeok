import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 96px 0;
  background-color: #6bd9b1;
`;

export const ProjectWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;

export const Project = styled.div`
  width: 720px;
  height: 360px;
  background-color: white;
  display: flex;
  justify-content: space-between;
`;

export const LeftSide = styled.div`
  width: 50%;

  & > img {
    width: 100%;
    height: 360px;
  }
`;

export const RightSide = styled.div`
  width: 50%;
  padding: 32px;
`;

export const Github = styled.a`
  color: black;
  text-decoration: none;

  &:hover {
    color: #1990ff;
  }
`;
