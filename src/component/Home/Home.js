import React from 'react';
import { Button, HomeContainer, Intro, Name } from './style';

function Home() {
  return (
    <HomeContainer>
      <div>
        <Intro>
          Hello, I'm <Name>Yun Jehyeok</Name>.
          <br />
          I'm a Front-End web developer.
        </Intro>
        <Button>
          <div>View my work</div>
        </Button>
      </div>
    </HomeContainer>
  );
}

export default Home;
