import React, { useEffect, useState } from 'react';

// style
import { NavContainer, NavItemBox } from './style';

function Navbar() {
  const [isHome, setIsHome] = useState('-60px');

  useEffect(() => {
    let element = document.getElementById('first');
    let absoluteTop = window.pageYOffset + element.getBoundingClientRect().top;

    document.addEventListener('scroll', () => {
      let scroll = document.documentElement.scrollTop;

      if (scroll < absoluteTop) {
        setIsHome('-60px');
      } else {
        setIsHome('0');
      }
    });
  }, []);

  const onClick = (e) => {
    e.preventDefault();

    let location = e.target.innerText.toLowerCase();

    document.getElementById(location).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <NavContainer id="nav" home={isHome}>
      <NavItemBox>
        <div onClick={onClick}>ABOUT</div>
        <div onClick={onClick}>SKILLS</div>
        <div onClick={onClick}>PROJECTS</div>
        <div onClick={onClick}>BLOG</div>
        <div onClick={onClick}>CONTACT</div>
      </NavItemBox>
    </NavContainer>
  );
}

export default Navbar;
