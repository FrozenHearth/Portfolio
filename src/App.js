import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
    </div>
  );
};

export default App;
