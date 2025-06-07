
import React, { useState } from 'react';
import "./App.scss";
import Hero from './Components/HeroSec/Hero';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Cursor from './Components/Cursor/Cursor';

const App = () => {


  return (
    <div className="bg">
      
      <Cursor />
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
        <Contact />
      </section>

    </div>
  )
}

export default App
