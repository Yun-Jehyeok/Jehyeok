import React from 'react';

// style
import { BorderBottom, Container, Header } from 'component/Style/style';
import { Background, ImgContainer, SkillList } from './style';

// image
import HtmlImg from 'img/html-logo.png';
import CssImg from 'img/css-logo.png';
import JsImg from 'img/js-logo.png';
import ReactImg from 'img/react-logo.png';
import NodeImg from 'img/node-logo.jpeg';
import TypescriptImg from 'img/typescript.png';
import SalesforceImg from 'img/salesforce.png';

const logoImg = [
  {
    imgSrc: HtmlImg,
  },
  {
    imgSrc: CssImg,
  },
  {
    imgSrc: JsImg,
  },
  {
    imgSrc: ReactImg,
  },
  {
    imgSrc: TypescriptImg,
  },
  {
    imgSrc: NodeImg,
  },
  {
    imgSrc: SalesforceImg
  }
];

function Skills() {
  return (
    <Background id="skills">
      <Container>
        <Header>SKILLS</Header>
        <BorderBottom>
          <div></div>
        </BorderBottom>
        <SkillList>
          {logoImg.map((img) => (
            <ImgContainer imgsrc={img.imgSrc}>
              <img src={img.imgSrc} />
            </ImgContainer>
          ))}
        </SkillList>
      </Container>
    </Background>
  );
}

export default Skills;
