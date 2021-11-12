import {
  About,
  Blog,
  Contact,
  Container,
  Experience,
  Home,
  ImgBox,
  Information,
  Left,
  Menu,
  Project,
  Right,
  TechSkill,
} from './style';

function App() {
  return (
    <Container>
      <Left>
        <ImgBox>
          <img src="https://placeimg.com/150/150/people" />
        </ImgBox>
        <Information>
          <h3>YUN JEHYEOK</h3>
          <div>
            <span>CLIENT DEVELOPER</span> &amp; JAVASCRIPT
          </div>
        </Information>
        <Menu>
          <div>HOME</div>
          <div>ABOUT</div>
          <div>TECH SKILLS</div>
          <div>PROJECT</div>
          <div>EXPERIENCE</div>
          <div>BLOG</div>
          <div>CONTACT</div>
        </Menu>
      </Left>
      <Right>
        <Home>
          <div>HOME</div>
        </Home>
        <About>
          <div>ABOUT</div>
        </About>
        <TechSkill>
          <div>TECH SKILLS</div>
        </TechSkill>
        <Project>
          <div>PROJECT</div>
        </Project>
        <Experience>
          <div>EXPERIENCE</div>
        </Experience>
        <Blog>
          <div>BLOG</div>
        </Blog>
        <Contact>
          <div>CONTACT</div>
        </Contact>
      </Right>
    </Container>
  );
}

export default App;
