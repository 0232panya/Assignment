
import React from 'react';
import './About.css';
import Coffee_cup from "./Coffee_cup.png";

const About = () => {
  return (
    <div id='About' className='About'>
      <div className='about-title'>
          <h1>About Us</h1>
      </div>

      <div className='about-section'>
        <div className='about-box'> 
        <div className='about-Img-sec'>
          <h1>Coder's Club</h1>
          <img src={Coffee_cup} alt='' />
        </div>
        <div className='aboutus-info'>
          <div className='aboutUs-info-box'>
          <h4>Address</h4>
            <p>
            Shop No.16, New BPT Building,
            Mallet Bunder, Road,<br /> Princess Dock,
            Mumbai Port Trust, Mazgaon, 
            Mumbai, Maharashtra, 400009
            </p>

            <h4>Time</h4>
            <div className='opening-hr'>
              <p>monday-friday - 9AM - 9PM  </p>
              <p>Saturday - 9AM - 5PM</p>
              <p>Sunday - 9AM - 7PM</p>
            </div>
            </div> 
        </div>
        </div>
      </div>

    </div>
  )
}

export default About;
