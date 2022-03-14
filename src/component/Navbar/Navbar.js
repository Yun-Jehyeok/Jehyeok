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

      if (scroll < absoluteTop - 1) {
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

  const items = [
    { id: 0, title: "ABOUT" },
    { id: 1, title: "SKILLS" },
    { id: 2, title: "PROJECTS" },
    { id: 3, title: "BLOG" },
    { id: 4, title: "CONTACT" }
  ]

  const Items = items.map((item) => (
    <div key={item.id} onClick={onClick}>{item.title}</div>
  ))

  return (
    <NavContainer id="nav" home={isHome}>
      <NavItemBox>
        {Items}
      </NavItemBox>
    </NavContainer>
  );
}

export default Navbar;
