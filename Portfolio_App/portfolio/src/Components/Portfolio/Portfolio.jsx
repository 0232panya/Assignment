
import './Portfolio.scss'
import { projects } from "./Portfolio.json";
import { motion, useScroll, useTransform, useInView, animate } from 'framer-motion' 
import { useEffect, useState, useRef } from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";

const portfolioVariant = {
  initial :{
    y: 400,
    opacity : 0
  },

  animate :{
    y : 0,
    opacity : 1,
    transition : {
      duration : 1,
      staggerChildren : 0.5,
    }
  }
}


const Portfolio = () => {

  const [filter, setFilter] = useState("website");
  const portfolioRef = useRef();

  const whileInView = useInView(portfolioRef , {marginY : '-400px'} )
 
  return (
    <motion.div className='portfolio'ref={portfolioRef} variants={portfolioVariant} initial="initial" animate={whileInView && 'animate'} transition={{duration: 1}}>
      <div className='title'>
        <p className='aboutme-P'>My Project</p>
        <h1>Portfolio Project</h1>
      </div>

      <div className='filter'>
          <button className={filter === "website" ? "active filterBtn" : "filterBtn"} onClick={() => setFilter("website")}>Website</button>
          <button className={filter === "design" ? "active filterBtn" : "filterBtn"} onClick={() => setFilter("design")}>Design</button>
      </div>
      <div className='scroller'>
        <div className='scroll-down'>
          <p>Scroll Down</p>
        </div>
        <HorizontalScroll filter={filter} />
        <div className='scroll-up'>
          <p>Scroll Up</p>
        </div>
      </div>
      
    </motion.div>
  )
}

const HorizontalScroll = ({filter}) =>{

  const target = useRef();

  const {scrollYProgress} = useScroll({
    target : target,
  })

  const x = useTransform(scrollYProgress, [0,1], ['2%', '-65%']);


    return(
      <motion.section ref={target} className='section'>
          <div className='horizontalSec'>
            <motion.div style={{x}} className='card-box'>
            {
              projects.map((i,index) => {   
                return(
                  i.type === filter &&(
                <motion.div className='projects-cards' key={i.id}   >  
                  <Card url={i.url} img={i.img} title={i.Title} description={i.description} Techno={i.Techno} />
                </motion.div>
              ))
            })
            }
            </motion.div>
          </div>
      </motion.section>
    )
}

const Card = ({url, img, title, description,Techno}) =>{
  return (
    <div className='cards'>
      <div className='card'>
          <div className='img-sec'>
            <img src={img} alt={img} />
          </div>
          <div className='portfolio-title'  >
              <h2>{title}</h2>
              <p className='techno'><spam className="techno-spam">Technology :</spam> {Techno}</p>
              <p>{description}</p>
              <a href={`${url}`} target='_blank' ><FaExternalLinkAlt /></a>
          </div>
      </div>
    </div>
  )
}

export default Portfolio;

