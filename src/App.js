import React from 'react';

// component
import About from 'component/About/About';
import Blog from 'component/Blog/Blog';
import Contact from 'component/Contact/Contact';
import Home from 'component/Home/Home';
import Projects from 'component/Projects/Projects';
import Skills from 'component/Skills/Skills';

function App() {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
