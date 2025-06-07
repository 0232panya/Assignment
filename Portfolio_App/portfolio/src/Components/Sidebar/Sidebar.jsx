
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Sidebar.scss';
import Link from './Links/Link';
import ToggleButton from './ToggleButton/ToggleButton';

const Slider = () => {

  const [open, setOpen] = useState(false)

  const variant = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      }
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition:{
        delay: 0.5,
        type: "spring",
        stiffness: 40,
        damping: 20,
      },
    },
  }


  return (
    <motion.div className='sidebar' variants={variant} animate={open ? "open" : "closed"} >
      <motion.div className='sidebar-bg'>
        <Link />
      </motion.div>
        <ToggleButton setOpen={setOpen} />
    </motion.div>
  )
}

export default Slider;
