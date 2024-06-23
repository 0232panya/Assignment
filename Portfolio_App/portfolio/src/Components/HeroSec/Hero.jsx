
import React from 'react';
import { motion } from 'framer-motion';
import "./Hero.scss";

const textvariants ={
  initial: {
    x: -500,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition :{
      duration : 1,
      staggerChildren: 0.1,
    },
  },
}

const sliderVariant = {
   initial : {
      x : 0,
   },

   animate : {
      x : "-220%",
      transition : {
        duration : 20,
        repeatType : "mirror",
        repeat : Infinity, 
      }
   }
}

const Hero = () => {
  return (
    <motion.div className='hero'>
      <div className='wrapper'>
        <motion.div className='textContainer' variants={textvariants} initial="initial" animate="animate" >
          <motion.h2 variants={textvariants}>PRANOTI MAGDUM</motion.h2>
          <motion.h1 variants={textvariants}>Front End Web Developer</motion.h1>
          <motion.div className='button_BTN' variants={textvariants}>
            <motion.button variants={textvariants}>Download CV</motion.button>
            <motion.button variants={textvariants}>Contact Me</motion.button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div className='slidingLetters' variants={sliderVariant} initial="initial" animate="animate" >
          Front End Developer
      </motion.div>
        <div className='profile-Img'>
            <img src='Images/profile.png' alt='' />
        </div>
      
    </motion.div>
  )
}

export default Hero;
