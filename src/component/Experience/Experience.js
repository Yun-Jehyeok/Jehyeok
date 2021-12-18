import React from 'react';
import { BorderBottom, Container, Header } from 'component/Style/style';

function Experience() {
  return (
    <Container id="experience">
      <Header>Experience</Header>
      <BorderBottom>
        <div></div>
      </BorderBottom>
      <div
        style={{
          width: '70%',
          height: '400px',
          marginTop: '32px',
          marginLeft: '15%',
        }}
      ></div>
    </Container>
  );
}

export default Experience;
