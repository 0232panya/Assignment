
import React from 'react'
import './RideSteps.css';


const RideSteps = () => {
  return (
    <div id='Ride' className='ride'>
        <div className='ride-title'>
            <p>HOW IT WORKS</p>
            <h1>Rentgo following 3 working Steps</h1>
        </div>
        <div className='ride-cards-box'>
            
            <div className='ride-card'>
                <div className='ride-card-img-box'>
                    <img src='https://cdn-icons-png.freepik.com/512/8065/8065913.png' alt='' />
                </div>
                <div className='ride-card-title'>
                    <h4>Choose a Location</h4>
                    <p>see 3 popular hotels at a heavily<br/> discounted price</p>
                </div>
            </div>

            <div className='ride-card'>
                <div className='ride-card-img-box claendar-img'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="4.5rem" height="4.5rem" viewBox="0 0 24 24"><path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zm6-3.586-3.707-3.707 1.414-1.414L11 15.586l4.293-4.293 1.414 1.414L11 18.414zM5 7h14v2H5V7z"/></svg>
                </div>
                <div className='ride-card-title'>
                    <h4>Pick-up date</h4>
                    <p>Click choose and we'll pick<br/>one of the 3 hotels</p>
                </div>
            </div>

            <div className='ride-card'>
                <div className='ride-card-img-box book-car-img'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="4.5rem" height="4.5rem" viewBox="0 0 24 24"><path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-4.588 15-2.449-1.288L9.514 19l.468-2.728L8 14.342l2.738-.398 1.225-2.48 1.225 2.48 2.738.398-1.981 1.931.467 2.727zM19 9H5V7h14v2z"/></svg>
                </div>
                <div className='ride-card-title'>
                    <h4>Book your car</h4>
                    <p>see which hotel right after<br/>you book</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RideSteps;
