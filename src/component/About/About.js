import React from 'react';
import Navbar from '../Navbar/Navbar';
import { BorderBottom, Container } from '../Style/style';
import { AboutHeader, AboutMe, Description } from './style';

function About() {
  return (
    <div id="about">
      <Navbar />
      <Container id="first">
        <AboutHeader>ABOUT</AboutHeader>
        <BorderBottom></BorderBottom>
        <AboutMe>"개발이 재밌습니다"</AboutMe>
        <Description>
          대학 생활에는 별로 흥미를 느끼지 못했던 제가 처음으로 흥미를 느낀
          과목이 &nbsp;
          <b>"웹 프로그래밍"</b> 과목이었습니다. 그때부터 웹 개발자를 꿈꾸게
          되었습니다. 항상 남의 의견에 따르기만 하던 제가 처음으로 팀장이 되어
          웹 프로젝트를 진행하기도 하고 여러 블로그나 인터넷 강의들을 참고하여
          공부를 하기도 하면서 제 길이 확고해짐을 느꼈습니다. 앞으로도 여러
          프로젝트를 진행하고, 완성도 높은 코드, 완성도 높은 UI를 위해 항상
          고뇌하고 노력하는 사람이 되려합니다.
        </Description>
      </Container>
    </div>
  );
}

export default About;
