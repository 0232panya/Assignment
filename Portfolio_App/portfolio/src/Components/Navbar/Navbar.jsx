
import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.scss';
import Sidebar from "../Sidebar/Sidebar"
import DarkMode from '../DarkMode/DarkMode';

const Navbar = () => {


  return (
    <nav className='nav'>
      {/* Sidebar */}
      <Sidebar />

      <div className='wrapper'>
        {/* Logo */}
        <motion.span initial={{opacity:0, scale:0.5}} 
        animate={{opacity:1, scale:1}} 
        transition={{duration: 0.5}}>
          Portfolio
        </motion.span> 
        
        <div className='social-logo'>
            <DarkMode />
            <img src="Images/Insta.png" alt='' />
            <img src="Images/Facebook.png" alt='' />
            <img src="Images/Twitter.webp" alt='' />
            <img src="Images/whatsapp.png" alt='' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
