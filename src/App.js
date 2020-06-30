import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import { AboutMe } from './components/About';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
      <AboutMe />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
