
import React from 'react'
import './Reviews.css';

const Reviews = () => {
  return (
    <div id='Reviews' className='reviews'>
      <div className='reviews-title'>
        <p>REVIEWS</p>
        <h1>What Our Customer Says</h1>
      </div>
      <div className=' review-box'>

        <div className=' review-Cards'>
            <div className='review-card-img'>
                <img src='https://www.shutterstock.com/image-photo/portrait-man-smiling-600nw-2028609842.jpg' alt='' />
            </div>
            <div className='review-info'>
                <h4>Gaurav, Bangaloru</h4>
                <p>Booked a XUV with unlimited kms, very happy with RentalX's service</p>
            </div>
        </div>

        <div className=' review-Cards'>
            <div className='review-card-img'>
                <img src='https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg' alt='' />
            </div>
            <div className='review-info'>
                <h4>Esha, Mumbai</h4>
                <p>Driving on your own is like breath of fresh air. You are in control</p>
            </div>
        </div>

        <div className=' review-Cards'>
            <div className='review-card-img'>
                <img src='https://cdn4.sharechat.com/sc_compressed_gm_40_124ipMzI4MDY0NzQ2NQ.jpg?tenant=sc&referrer=pwa-sharechat-service&f=NzQ2NQ.jpg' alt='' />
            </div>
            <div className='review-info'>
                <h4>Himanshu, Delhi</h4>
                <p>Booked a car for a family trip which was very comfortable and in great condition</p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Reviews;
