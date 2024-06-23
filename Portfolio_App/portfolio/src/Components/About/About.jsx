
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.scss';
import { IoPersonOutline } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FaPaintBrush } from "react-icons/fa";
import { GiCook } from "react-icons/gi";
import { BiSolidCameraMovie } from "react-icons/bi";
import { MdCardTravel } from "react-icons/md";


const imageVariant = { 

    initial: {
        y : 400,
        opacity : 0,
    },

    animate : {
        y : 0,
        opacity : 1,
        transition : {
            duration : 1,
            staggerChildren : 0.1,
        },
    },
}

const introVariants = { 
    initial: {
        x : 500,
        y : 100,
        opacity : 0,
    },

    animate : {
        x : 0, 
        y : 0,
        opacity : 1,
        transition : {
            duration : 1,
            staggerChildren : 0.1,
        },
    },
}

const About = () => {

    const ref = useRef() ; 

    const isInView = useInView(ref, {marginY: '-500px'})

  return (
    <motion.div className='About-section' 
        variants={imageVariant} 
        initial="initial" 
        ref={ref}
        animate={isInView && "animate"}
        >

        <motion.div className='about-ImgSec' 
            variants={imageVariant}
            initial="initial" 
            animate="animate">
            <img src='https://www.remoterocketship.com/images/blog/what-is-your-approach-to-handling-constructive-criticism-or-feedback.jpeg' alt='' />
        </motion.div>

        <motion.div className='aboutme-Sec' variants={introVariants} initial="initial" animate="animate">
                <div className='title'>
                    <p className='aboutme-P'>My Intro</p>
                    <h2 className="sub-title">About Me</h2>
                </div>
                <p className='intro'>Hello, My name is Pranoti Magdum. I am from Kolhapur.
                    I have completed my B.com from Vivekanand college, Kolhapur in 2021. 
                    I have done the Front End Development course. 
                </p>
                <div className='about-info'>
                    <ul>
                        <li>
                            <IoPersonOutline  className='icons' /><p>Name &nbsp; :</p> Pranoti Magdum
                        </li>
                        <li>
                            <FaPhoneFlip  className='icons' /> <p>Phone &nbsp; :</p> +91 8623029708
                        </li>
                        <li>
                            <CiMail className='icons'  /> <p>Email &nbsp; :</p> pranotimagdum2000@gmail.com
                        </li>
                    </ul>
                </div>
                <div className='aboutMy-Interest'> 
                    <h2>My Interest</h2>
                    <ul>
                        <li><FaPaintBrush className='interest-icon'/> Painting</li>
                        <li><GiCook className='interest-icon'/> Cooking</li>
                        <li><BiSolidCameraMovie className='interest-icon'/> Movie</li>
                        <li><MdCardTravel className='interest-icon'/> Travel</li>
                    </ul>
                </div>
                <div className='aboutme-Experience'>
                    <h2>Experience</h2>
                    <p>&nbsp;  &nbsp; &nbsp; Fresher</p>
                </div>
        </motion.div>
    </motion.div>
  )
}

export default About
