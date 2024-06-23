
import React, { useEffect, useState } from 'react';
import './Cart.css';
import CartItems from './CartItems/CartItems';
import { ImBin } from "react-icons/im";

const Cart = ({cart, setCart, handleChange}) => {

    const [price, setPrice] = useState(0);


    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (
            ans += item.qty * item.Price
        ))
        setPrice(ans);
    }

    useEffect(()=>{
        handlePrice();
    });
    
    const handleRemove =(id) =>{
      let arr = cart.filter((item) => item.id !== id)
      setCart(arr)
    }



  return (
    <div className='Cart-Page'>
      <div className='fonth2'>
        <h2>Your Orders</h2>
      </div>
      <div className='cart-sec'>
        <div className='cart-Items'>
            {
                cart && cart.map((carts) =>{
                    return(
                        <div key={carts.id}>

                            <CartItems key={cart.id} carts={carts}  handleChange={handleChange} handleRemove= {handleRemove} />

                        </div>
                    )
                })
            }
        </div>

        <div className='total-price'>
            <h6>Total Price : &#x20b9; {price}</h6>
        </div>

        <div className='nextBTN'>
          <button>Next</button>
        </div>

      </div>
     
      
    </div>
  )
}

export default Cart;
