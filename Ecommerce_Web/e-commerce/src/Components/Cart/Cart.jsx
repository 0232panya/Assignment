
import React, { useContext, useEffect, useState } from 'react'
import CartItem from '../CartItem/CartItem'
import './Cart.css';
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import PriceDetails from '../Price-Details/PriceDetails';

const Cart = () => {

    const {cart, price, enable, delivery,  Breadcrumbs, setCurrentStep, setIsComplete } = useContext(ShopContext);
    const navigate = useNavigate();
   
    const handleCheckout = (event) =>{
        event.preventDefault();
        if(cart.length >= 0){ 
            navigate('./orders')
            setCurrentStep(prevStep =>{
                        if(prevStep === Breadcrumbs.length){
                            setIsComplete(true);
                        }else{
                            return prevStep +1
                        }
            })
        }
    }


  return (
    <div  className='cartpage'>
        {
           !enable ?<div className='empty-cart'>
                <div  className='empty-cart-img'>
                    <img src='/empty_cart.png' alt='' />
                </div>
                <div className='empty-cart-title'>
                    <p className='empty-cart-titleP'>You're Cart is Empty</p>
                    <Link to={'/'} className='Home-link '>Add Items</Link>
                </div>
            </div> :
            <div className='cart-items-side'>
            <div className='cart-items-container'>
            <div className='cart-items'>
            {
                 cart.map((carts) => {
                    return (
                        <div key={carts.id}>
                            <CartItem carts={carts} />
                            <hr />
                        </div>
                    )
                })
            }
            </div>
            </div>

            <PriceDetails cart={cart} price={price} delivery={delivery} handleCheckout={handleCheckout} />
        </div>
        }
        
    </div>
  )
}

export default Cart
