
import React, { useContext, useEffect, useRef, useState } from 'react'
import './CheckOut.css'
import Cart from '../../Components/Cart/Cart';
import Orders from '../../Components/Orders/Orders';
import PlaceOrder from '../../Components/PlaceOrder/PlaceOrder';
import { IoShieldCheckmark } from "react-icons/io5"
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const CheckOut = () => {
 
    const {currentStep, isComplete, Breadcrumbs=[], handleCheckOutNext} = useContext(ShopContext);

    const [margin, setMargin] = useState({
        marginLeft : 0,
        marginRight : 0
    })
    const stepRef = useRef([]);

    useEffect(() => {
        setMargin({
            marginLeft: stepRef.current[0].offsetWidth/2,
            marginRight: stepRef.current[Breadcrumbs.length -1].offsetWidth/2
        })

    },[stepRef])

    if(!Breadcrumbs.length){
        return <></>
    }


    const calculateProgressBarWidth = () =>{
        return ((currentStep -1) / (Breadcrumbs.length)) * 150;
    }

    const ActiveComponent = Breadcrumbs[currentStep - 1]?.Component;

  return (
    <div className=''>
        <div className='checkout-nav-bar'>
            <div className='checkout-img'>
                <img src='/figma_img.png' alt='' />
            </div>

            <div className='stepper'>
                {
                    Breadcrumbs.map((e,i)=>{
                        return(
                            <div key={e.name} ref={(el) => (stepRef.current[i] = el)} className={`step ${currentStep > i+1 || isComplete ? "complete" : ""}  ${currentStep === i+1 ?"active" : ""}`}>
                                <div className='step-num'>{
                                    currentStep > i+1 || isComplete ? (<span>&#10003;</span>) :
                                    ( i + 1)
                                }</div>
                                <div className='step-name'>{e.name}</div>
                            </div>
                        )
                    })
                }
                <div className='progress-bar' style={{width : `calc(100% - ${margin.marginLeft + margin.marginRight}px)`}}>
                    <div className='progress' style={{width: `${calculateProgressBarWidth()}%`}} ></div>
                </div>
            </div>

            <div className='checkout-right-side'>
                <IoShieldCheckmark className='shieldcheck' />
                <p>100% Secure</p>
            </div>

        </div>

        <div>
            <ActiveComponent />
        </div>
        
    </div>
  )
}

export default CheckOut;
