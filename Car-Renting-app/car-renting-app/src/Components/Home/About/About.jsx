
import React from 'react'
import './About.css';

const About = () => {
  return (
    <div id='About' className='about'>
        <div className='about-title'>
          <p>ABOUT US</p>
          <h1>Welcome To Car Rent Services</h1>
        </div>

        <div className='aboutus-InfoSection'>
          <div className='aboutus-img'>
            <img src='https://purepng.com/public/uploads/large/purepng.com-jeepjeepautomobilesamerican-automobilesfiat-chrysler-automobiles-1701527488520il0n1.png' alt='' />
          </div>
          <div className='aboutUs-Info'>
          <p>
            We are specialized team committed to providing reliable car rental services.
            one of the advantages of renting a car from us is offering competitive and transparent prices.
            If you are in Goa you will find Car rental service provider at every crossroad. 
            And why not after all it is the most visited tourist place in India. 
            If you want to visit each and every corner of Goa you will need a car or bike. 
            You can go to public transport or auto also but it can be time-consuming and 
            that will affect your pocket so badly.so, you can go for RentalX car rental 
            service provider who provides their service in the entire Goa.
          </p>
          </div>
        </div>

    </div>
  )
}

export default About
