
import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  open: {
    transition: {
      staggerChildren : 0.2,
    },
  },
  closed : {
    transition: {
      staggerChildren : 0.05,
      staggerDirection : -1,
    },
  },
}

const itemVariant = {
  open: {
    y : 0,
    opacity: 1,
  },
  closed : {
    y : 50,
    opacity: 0,
  },
}

const Link = () => {

  const item = [
    "Home",
    "About",
    "Skills",
    "Portfolio",
    "Contact",
  ]

  return (
    <motion.div className='links' variants={variants}>
      {
        item.map(i =>(
          <motion.a href={`#${i}`} key={i} variants={itemVariant} whileHover={{scale:1.2}} whileTap={{scale:0.9}} >{i}</motion.a>
        ))
      }
    </motion.div>
  )
}

export default Link;
