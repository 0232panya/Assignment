import React, { useContext, useEffect, useState } from 'react'
import { ImBin } from "react-icons/im";
import { ShopContext } from '../../Context/ShopContext';
import './CartItem.css';

const CartItem = ({ carts }) => {

  const { handleRemove, increaseQuantity, decreaseQuantity } = useContext(ShopContext)


  return (
              <div>
                  <div className='cartbox'>
                    <div className='cartbox-img '>
                      <img src={carts.thumbnail} alt='' />
                    </div>
                    <div className='cartbox-details'>
                        <p className='cartbox-itemTitle'>{carts.title}</p>
                        <div className='cartbox-QtyBtn'>
                                <button className='incr-decrem-BTN' onClick={() => decreaseQuantity(carts.id)} >-</button>
                                  <div className='cartbox-QtyNo'>{carts.quantity || 1}</div>
                                <button className='incr-decrem-BTN' onClick={() => increaseQuantity(carts.id)}>+</button>
                        </div>
                        <p className='cartbox-price'>${(carts.price * (carts.quantity || 1)).toFixed(2)}</p>

                        <button onClick={() => handleRemove(carts.id)} className='cartbox-delete'><ImBin /></button>
                    </div>
                  </div>
              </div>
  )
}

export default CartItem;
