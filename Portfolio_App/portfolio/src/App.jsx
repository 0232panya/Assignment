
import React, { useState } from 'react';
import "./App.css";
import Hero from './Components/HeroSec/Hero';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Portfolio from './Components/Portfolio/Portfolio';

const App = () => {


  return (
    <div className="bg">
      <section id='Home'>
        <Navbar />
        <Hero />
      </section>
      <section id='About'>
        <About />
      </section>
      <section id='Skills'>
        <Skills />
      </section>
      <section id='Portfolio'>
        <Portfolio />
      </section>
      <section id='Contact'>
        Contact
      </section>

      
    </div>
  )
}

export default App
