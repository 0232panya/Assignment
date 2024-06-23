
import React from 'react'
import './Banner.css';

const Banner = () => {
  return (
    <div id="Banner">
        <div className='banner-Title-section'>
          <h1>
            Start your day with <br /> cup of Coffee
          </h1>
          <a href='/#Menu'><button>Order Now</button></a>
        </div>
        <div className='banner-img-section'>
            <img src='https://static.vecteezy.com/system/resources/previews/027/182/250/original/coffee-cup-latte-art-top-view-isolated-on-a-transparent-background-png.png' alt='' /> 
            <div className='text-bg1'>
              <h1>Latte</h1>
            </div>

            <div className='text-bg2'>
              <h1>Best Coffee</h1>
            </div>
        </div>
    </div>
  )
}

export default Banner;
