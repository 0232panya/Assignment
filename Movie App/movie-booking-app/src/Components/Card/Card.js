
import React from 'react';
import './Card.css';

const Card = ({data}) => {
  return (
    <div className='img-card'>
        {
            data.show.image ? (<img src={data.show.image.medium} alt='' />):(<img src="https://i0.wp.com/worleygig.com/wp-content/uploads/2017/04/the-ticket-movie-poster.png?resize=459%2C677&ssl=1" alt="" />)
        }
      
    </div>
  )
}

export default Card;
