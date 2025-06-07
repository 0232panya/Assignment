import React from 'react';
import './PriceDetails.css';

const PriceDetails = ({cart, price, delivery, handleCheckout}) => {
  return (
    <div className='price-side'>
            <div className='price-details '>
                <div className='price-details-'>
                    <p className='price-details-p'>Price Details ({cart.length} items)</p>
                </div>
                <div className='checkout-price'>
                    <div className='product-total-price'>
                        <p>SubTotal :</p>
                        <p>$ &nbsp;{price}</p>
                    </div>
                    <div className='product-total-price'>
                        <p>Delivery fee</p>
                        <p>$ &nbsp;{delivery}</p>
                    </div>
                    <hr className='checkout-hr' />
                    <div className='product-total-price'>
                        <p>Total Amount :</p>
                        <p>$ &nbsp;{price + delivery}</p>
                    </div>
                </div>
            </div>
            <div className='checkout-btn-div'>                
                <button className='checkout-BTN' onClick={handleCheckout}>Checkout</button>
            </div>
        </div>
  )
}

export default PriceDetails;
