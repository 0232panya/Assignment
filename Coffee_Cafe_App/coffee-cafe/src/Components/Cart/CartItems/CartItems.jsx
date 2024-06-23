
import React from 'react';
import './CartItems.css';
import { ImBin } from "react-icons/im";

const CartItems = ({carts, handleChange, handleRemove}) => {

  return (
    <>
    <div className='Cart-Cards'>
      <div className='cart-card-img'>
        <img src={carts.urlImg} alt='' />
      </div>

      <div className='card-cart-info'>
        <div className='itle-h5'>
            <h5>{carts.title}</h5>
        </div>

        <div className='item-Qty'>
            <button className='minus' onClick={() => handleChange(carts , -1)}>-</button>
            <div className='qty'>{carts.qty}</div>
            <button className='plus' onClick={() => handleChange(carts , +1)}>+</button>
        </div>
        
        <div className='item-price'>
            <p>&#x20b9; {carts.Price * carts.qty}</p>
        </div>
        <div className='delete-btn'>
            <button onClick={() => handleRemove(carts.id)}><ImBin /></button>
        </div>
      </div>
    </div>
    <hr />
    </>
  )
}

export default CartItems
