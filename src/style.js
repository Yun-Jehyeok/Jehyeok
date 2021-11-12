import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin-left: 10%;
  display: flex;
  justify-content: start;
`;

export const Left = styled.div`
  width: 25%;
  background-color: #f2f3f7;
  min-height: 100vh;
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 64px;
  margin-bottom: 32px;

  & img {
    border-radius: 70%;
  }
`;

export const Information = styled.div`
  text-align: center;

  & > div {
    font-size: 12px;
    margin-top: 12px;
  }

  & span {
    color: #1990ff;
  }
`;

export const Menu = styled.div`
  text-align: center;
  margin-top: 32px;

  & > div {
    margin-bottom: 16px;
    font-size: 14px;
  }
`;

export const Right = styled.div`
  width: 75%;

  padding: 32px;
`;

export const Home = styled.div`
  & > div:nth-child(1) {
    color: #999999;
    font-size: 14px;
  }
`;

export const About = styled.div`
  & > div:nth-child(1) {
    color: #999999;
    font-size: 14px;
  }
`;

export const TechSkill = styled.div`
  & > div:nth-child(1) {
    color: #999999;
    font-size: 14px;
  }
`;

export const Project = styled.div`
  & > div:nth-child(1) {
    color: #999999;
    font-size: 14px;
  }
`;

export const Experience = styled.div`
  & > div:nth-child(1) {
    color: #999999;
    font-size: 14px;
  }
`;

export const Blog = styled.div`
  & > div:nth-child(1) {
    color: #999999;
    font-size: 14px;
  }
`;

export const Contact = styled.div`
  & > div:nth-child(1) {
    color: #999999;
    font-size: 14px;
  }
`;
