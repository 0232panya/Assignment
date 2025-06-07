
import React, { useContext, useState } from 'react';
import './Cards.css';
import { ShopContext } from '../../Context/ShopContext';
import { IoStar } from "react-icons/io5";

const Cards = ({ i }) => {

  const { handleClick } = useContext(ShopContext);

  return (
    <div className='top-items'>
        <div className='item-img'>
          <img src={i.thumbnail} alt='' />
        </div>
        <div className='item-details'>
          <div className='item-title'>
            <h5>{i.title.slice(0,40)}...</h5>
            <div className='rating-p'><p>{i.rating}</p> <IoStar className='star-icon' /> </div>
          </div>
            <div className='item-price'>
              <p>${i.price}</p>
              <button onClick={() => handleClick(i)}>Add to Cart</button>
            </div>

        </div>
    </div>
  )
}

export default Cards;
