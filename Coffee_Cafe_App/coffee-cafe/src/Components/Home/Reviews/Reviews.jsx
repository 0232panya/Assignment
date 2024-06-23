
import React from 'react';
import './Reviews.css';

const Reviews = () => {
  return (
    <div id='Reviews'>
      <div>
        <h1>Reviews</h1>
      </div>
      <div className='review-cardBox'>
        
        <div className='review-card'>
            <div className='review-img'>
              <img src='https://wallpapercave.com/wp/wp5566923.jpg' alt='' />
            </div>
            <div className='review-info'>
              <h5>smita</h5>
              <p>This is definitely the cutest and cozy cafe which makes it a perfect date spot too! They have tasty food options and drinks and the staff is really so helpful.</p>
            </div>
        </div>

        <div className='review-card'>
            <div className='review-img'>
              <img src='https://1.bp.blogspot.com/-3L4emiui9oU/W2QKTV60dcI/AAAAAAAAQek/0y8omc2hJU46r9glrCkPv2Nyva3Tj32LQCLcBGAs/s1600/indian-beautiful-girls-hd-photos-14.jpg' alt='' />
            </div>
            <div className='review-info'>
              <h5>Vinisha</h5>
              <p>They provide the best service and food. One of the finest new place to try out.</p>
            </div>
        </div>

        <div className='review-card'>
            <div className='review-img'>
              <img src='https://www.celebsfacts.com/wp-content/uploads/2018/06/Ashnoor-Kaur.jpg' alt='' />
            </div>
            <div className='review-info'>
              <h5>Manali</h5>
              <p>Loved the food! The grilled cottage cheese steak was delicious. The double chocolate mousse was perfect! Definitely worth a visit</p>
            </div>
        </div>
      
      </div>
    </div>
  )
}

export default Reviews;
