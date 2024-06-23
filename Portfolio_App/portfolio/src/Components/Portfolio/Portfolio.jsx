
import './Portfolio.scss'
import  Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { projects } from "./Portfolio.json";
import { motion } from 'framer-motion' 

const Portfolio = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='portfolio'>
      <h1>My Project</h1>
      
      {/* <motion.div className='carousal' >
        <Carousel responsive={responsive} swipeable={true} draggable={true} removeArrowOnDeviceType={["tablet", "mobile"]}>
          {
            projects.map((i) => (
                <div className='projects-cards' key={i.id} >
                  <a href={`${i.url}`}>
                    <div className='img-sec'>
                        <img src={i.img} alt={i.img} />
                    </div>
                    <div className='portfolio-title'>
                        <h2>{i.Title}</h2>
                        <p>{i.description}</p>
                    </div>
                  </a>
                </div>
            ))
          }
        </Carousel>
      </motion.div> */}

      <motion.div className='container' >
       {
            projects.map((i) => (
                <div className='projects-cards' key={i.id} >
                  <a href={`${i.url}`}>
                    <div className='img-sec'>
                        <img src={i.img} alt={i.img} />
                    </div>
                    <div className='portfolio-title'>
                        <h2>{i.Title}</h2>
                        <p>{i.description}</p>
                    </div>
                  </a>
                </div>
            ))
          }
      </motion.div>
    </div>
  )
}

export default Portfolio;
