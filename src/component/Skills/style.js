import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  background-color: #f5f5f5;
`;

export const SkillsHeader = styled.h2`
  font-size: 42px;
  text-align: center;
`;

export const SkillList = styled.div`
  width: 70%;
  margin-left: 15%;
  margin-top: 64px;
  display: flex;
  justify-content: space-between;
`;

export const ImgContainer = styled.div`
  width: 114px;
  height: 114px;
  border-radius: 30px;
  background-color: white;

  &:hover {
    transform: rotateY(180deg);
  }

  & > img {
    width: 114px;
    height: 114px;
    border-radius: 30px;
  }
`;
