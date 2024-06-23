
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='footer-img1'>
        <p>Coder's Cafe</p>
        <img src='https://www.freepnglogos.com/uploads/coffee-png/coffee-east-side-deli-ltd-artisan-delicatessen-organic-15.png' alt='' />
      </div>
      <div className='footer-info'>
        <div className='privacy'>
          <div>Privacy</div>
          <p>Terms of use</p>
          <p>Privacy policy</p>
          <p>Cookies</p>
        </div>
        <div className='servicesInfo'>
          <div>Services</div>
          <p>Shop</p>
          <p>Order ahead</p>
          <p>Menu</p>
        </div>
        <div className='aboutUSInfo'>
          <div>About us</div>
          <p>Find Location</p>
          <p>About us</p>
          <p>Our Story</p>
        </div>
      </div>

      <div className='newsletter'>
        <h1>Newsletter</h1>
        <form>
          <input type='email' placeholder='Enter Your Email' />
          <button>Submit</button>
        </form>
      </div>

      <div>
      </div>
     
    </footer>
  )
}

export default Footer;
