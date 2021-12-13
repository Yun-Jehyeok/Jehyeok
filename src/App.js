import React from 'react';
import About from './component/About/About';
import Blog from './component/Blog/Blog';
import Contact from './component/Contact/Contact';
import Experience from './component/Experience/Experience';
import Home from './component/Home/Home';
import Projects from './component/Projects/Projects';
import Skills from './component/Skills/Skills';

function App() {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
