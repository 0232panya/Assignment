
import React from 'react';
import './Card.css';
import { FaCartShopping } from "react-icons/fa6";

const Card = ({item, handleClick,  login, setPopUp }) => {


  return (
    <div className='card'>
        <div className='card-img'>
            <img src={item.urlImg} alt='' />
        </div>

        <div className='card-title'>
            <h4>{item.title}</h4>

            <div className='card-price-order'>
                <p>&#x20b9; {item.Price}</p>

                <div className='cart-order-btn'>
                  {
                    login ? <button  onClick={() => handleClick(item)}><FaCartShopping className='cart' /></button>  :
                    <div> <button className='login-btn' onClick={() => setPopUp(true)}><FaCartShopping className='cart' /></button>
                        </div>
                  }
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Card;
