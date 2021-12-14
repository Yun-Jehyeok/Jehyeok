import React from 'react';

const projectList = [
  {
    id: 0,
    title: 'S-Mission',
    description: '사이드 프로젝트 커뮤니티 및 관리',
    stack: '#React #Redux #Styled-Component #Node.js #MongoDB',
    url: 'https://github.com/Yun-Jehyeok/s-mission',
  },
  {
    id: 1,
    title: 'Memories',
    description: '국가 유공자 분들을 위한 웹앨범 및 굿즈 판매 사이트',
    stack: '#React #Redux #Styled-Component #Node.js #MongoDB',
    url: 'https://github.com/Yun-Jehyeok/memories',
  },
  {
    id: 2,
    title: '대학 시설 및 스케줄 관리',
    description:
      '캡스톤 디자인으로 진행한 프로젝트로 대학 내 스케줄 관리 및 시설의 대관과 예약 서비스를 제공하고 ESL 기기와의 연동을 통해 문서 현판을 대체한 프로젝트',
    stack: '#React #Redux #Styled-Component',
    url: 'https://github.com/Yun-Jehyeok/UFMS-Capstone/tree/main',
  },
];

function Projects() {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        padding: '96px 0',
        backgroundColor: '#6BD9B1',
      }}
      id="projects"
    >
      <div
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: '30pt',
          fontWeight: 'bold',
        }}
      >
        Projects
      </div>
      {projectList.map((project) => (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '32px',
          }}
          key={project.id}
        >
          <div
            style={{
              width: '720px',
              height: '360px',
              backgroundColor: 'white',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ width: '50%' }}>
              <img
                src="http://placehold.it/300/300/any"
                style={{ width: '100%', height: '360px' }}
              />
            </div>
            <div
              style={{
                width: '50%',
                padding: '32px',
              }}
            >
              <h1>{project.title}</h1>
              <div>{project.description}</div>
              <h4>{project.stack}</h4>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                style={{ color: 'black', textDecoration: 'none' }}
              >
                깃허브에서 확인하기
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
