import React from 'react';
import { BorderBottom, Header } from 'component/Style/style';
import {
  Github,
  LeftSide,
  Project,
  ProjectsContainer,
  ProjectWrap,
  RightSide,
} from './style';

import SMission from 'img/s-mission.png';
import Memories from 'img/memories.png';
import Capstone from 'img/capstone.png';

const projectList = [
  {
    id: 0,
    title: 'S-Mission',
    description: '사이드 프로젝트 커뮤니티 및 관리',
    stack: '#React #Redux #Styled-Component #Node.js #MongoDB',
    url: 'https://github.com/Yun-Jehyeok/s-mission',
    img: SMission,
  },
  {
    id: 1,
    title: 'Memories',
    description: '국가 유공자 분들을 위한 웹앨범 및 굿즈 판매 사이트',
    stack: '#React #Redux #Styled-Component #Node.js #MongoDB',
    url: 'https://github.com/Yun-Jehyeok/memories',
    img: Memories,
  },
  {
    id: 2,
    title: '대학 시설 및 스케줄 관리',
    description:
      '캡스톤 디자인으로 진행한 프로젝트로 대학 내 스케줄 관리 및 시설의 대관과 예약 서비스를 제공하고 ESL 기기와의 연동을 통해 문서 현판을 대체한 프로젝트',
    stack: '#React #Redux #Styled-Component',
    url: 'https://github.com/Yun-Jehyeok/UFMS-Capstone/tree/main',
    img: Capstone,
  },
];

function Projects() {
  return (
    <ProjectsContainer id="projects">
      <Header style={{ color: 'white' }}>PROJECTS</Header>
      <BorderBottom>
        <div style={{ backgroundColor: 'white' }}></div>
      </BorderBottom>
      {projectList.map((project) => (
        <ProjectWrap key={project.id}>
          <Project>
            <LeftSide>
              <img src={project.img} />
            </LeftSide>
            <RightSide>
              <h1>{project.title}</h1>
              <div>{project.description}</div>
              <h4>{project.stack}</h4>
              <Github href={project.url} target="_blank" rel="noreferrer">
                깃허브에서 확인하기
              </Github>
            </RightSide>
          </Project>
        </ProjectWrap>
      ))}
    </ProjectsContainer>
  );
}

export default Projects;
