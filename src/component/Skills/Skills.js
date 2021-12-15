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
          <div
            style={{
              width: '114px',
              height: '114px',
              borderRadius: '30px',
              backgroundColor: 'white',
            }}
          ></div>
        </div>
      </Container>
    </Background>
  );
}

export default Skills;
