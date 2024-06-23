import React from 'react'
import About from '../About/About'
import Services from '../Services/Services'
import Banner from '../Banner/Banner'
import RideSteps from '../RideSteps/RideSteps'
import Reviews from '../Reviews/Reviews'

const Home = () => {
  return (
    <div>
        <Banner />
        <RideSteps />
        <Services />
        <About />
        <Reviews />
    </div>
  )
}

export default Home
