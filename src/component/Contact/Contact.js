import React from 'react';
import { ContactContainer, ContactHeader, ContactWrap } from './style';

function Contact() {
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
      </div>
    </ContactContainer>
  );
}

export default Contact;
