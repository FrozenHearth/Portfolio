import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import { AboutMe } from './components/About';
import { Skills } from './components/Skills';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
      <AboutMe />
      <Skills />
    </div>
  );
};

export default App;
