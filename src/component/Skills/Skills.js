import React from 'react';
import { BorderBottom, Container } from '../Style/style';
import { Background, SkillsHeader } from './style';

function Skills() {
  return (
    <Background id="skills">
      <Container>
        <SkillsHeader>SKILLS</SkillsHeader>
        <BorderBottom></BorderBottom>
        <div
          style={{
            width: '70%',
            marginLeft: '15%',
            marginTop: '64px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ borderBottom: '4px solid #1990ff', padding: '16px' }}>
            <img src="https://img.icons8.com/office/120/000000/computer.png" />
            <div
              style={{
                textAlign: 'center',
                fontSize: '24px',
              }}
            >
              <b>React.js</b>
            </div>
          </div>
          <div style={{ borderBottom: '4px solid #1990ff', padding: '16px' }}>
            <img src="https://img.icons8.com/office/120/000000/computer.png" />
            <div
              style={{
                textAlign: 'center',
                fontSize: '24px',
              }}
            >
              <b>Node.js</b>
            </div>
          </div>
          <div style={{ borderBottom: '4px solid #1990ff', padding: '16px' }}>
            <img src="https://img.icons8.com/office/120/000000/computer.png" />
            <div
              style={{
                textAlign: 'center',
                fontSize: '24px',
              }}
            >
              <b>TypeScript</b>
            </div>
          </div>
          <div style={{ borderBottom: '4px solid #1990ff', padding: '16px' }}>
            <img src="https://img.icons8.com/office/120/000000/computer.png" />
            <div
              style={{
                textAlign: 'center',
                fontSize: '24px',
              }}
            >
              <b>RN</b>
            </div>
          </div>
        </div>
      </Container>
    </Background>
  );
}

export default Skills;
