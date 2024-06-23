
import React from 'react'
import './Banner.css';

const Banner = () => {
  return (
    <div id='Banner' className='home-Banner'>
      <div className='banner'>
      <div className='intro-section'>
          <h1><span className='span'>Looking </span> to Rent a <span className='bottom-border'>Car </span> ? </h1>
          <p>Discover RentalX car rental options in India
             with Rent a car Select from a range of car options 
             and Local Specials.</p>
      </div>
      <div className='img-scetion'>
        <div></div>
        <img src="https://purepng.com/public/uploads/large/purepng.com-jeepjeepautomobilesamerican-automobilesfiat-chrysler-automobiles-1701527488520il0n1.png" alt='' />
      </div>
      </div>

{/* -------------------- FORM -------------------- */}
      <div className='car-renting-date'>
        <form>
          {/* <span> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
        </svg>
         <input type='text' placeholder='Choose Location' className='span-input' />
        {/* </span> */}

        {/* <span> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
          </svg>
           <input type='date' placeholder='Pickup Date' className='span-input' />
          {/* </span> */}

          {/* <span> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
          </svg>
           <input type='date' placeholder='Return Date' className='span-input' />
          {/* </span> */}

          <button>Search</button>
        </form>
      </div>
      
    </div>
  )
}

export default Banner;
