
import React, { useRef } from 'react';
import { Circle } from "rc-progress";
import './Skills.scss';
import { motion, useInView } from 'framer-motion';

const variants ={
  initial :{
    y : 100,
    opacity : 0,
  },

  animate :{
    y : 0,
    opacity : 1,

    transition :{
      duration : 1,
      staggerChildren : 0.1,
    },
  }
}

const Skills = () => {

  const ref = useRef();

  const isInView = useInView(ref, {margin : "-100px"})


  const skills= [
    {"img" : "Images/html5.webp", "skills" : "72"},
    {"img" : "Images/css-logo.png", "skills" : "60"},
    {"img" : "Images/png-javascript.png", "skills" : "50"},
    {"img" : "Images/react-logo.png", "skills" : "55"},
    {"img" : "Images/bootstrap-logo.png", "skills" : "70"}
  ]

  return (
    <motion.div className='skills-sec'
     variants={variants} ref={ref}
     initial="initial" animate={isInView && "animate"} >
        <h1>My Skills</h1>
        <div className='container row'> 
           {
            skills.map(i => (
              <div className='col-5 col-sm-4 col-md-4 box'>
                <div className='cards'>
                  <div className='img-side'>
                    <img src={i.img} alt={i} />
                  </div>
                  <div className='skill-length-side'>
                    <p>{i.skills} %</p>
                    <div style={{width:"150px", height: "150px"}}>
                    <Circle percent={i.skills} strokeWidth={8} trailWidth={8} className='progress-bar' />
                    </div>
                  </div>
                </div>
              </div>
            ))
           }
        </div>
    </motion.div>
  )
}

export default Skills
