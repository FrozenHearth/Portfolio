import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import { AboutMe } from './components/About';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
      <AboutMe />
    </div>
  );
};

export default App;
