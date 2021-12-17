import React, { useEffect, useState } from 'react';
import { ContactContainer, ContactHeader, ContactWrap, UpArrow } from './style';
import Arrow from './up-arrow.png';

function Contact() {
  const [isHome, setIsHome] = useState('-80px');
  const onClick = (e) => {
    e.preventDefault();

    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    let element = document.getElementById('first');
    let absoluteTop = window.pageYOffset + element.getBoundingClientRect().top;

    document.addEventListener('scroll', () => {
      let scroll = document.documentElement.scrollTop;

      if (scroll < absoluteTop) {
        setIsHome('-80px');
      } else {
        setIsHome('50px');
      }
    });
  }, []);

  return (
    <ContactContainer id="contact">
      <div>
        <ContactHeader>CONTACT</ContactHeader>
        <ContactWrap>
          <h2>
            Github&nbsp;&nbsp;
            <a
              href="https://github.com/Yun-Jehyeok"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/Yun-Jehyeok
            </a>
          </h2>
          <h2>
            Email&nbsp;&nbsp;
            <span style={{ color: '#04c2c9' }}>dbswpgur2@naver.com</span>
          </h2>
        </ContactWrap>
        <UpArrow src={Arrow} onClick={onClick} home={isHome} />
      </div>
    </ContactContainer>
  );
}

export default Contact;
