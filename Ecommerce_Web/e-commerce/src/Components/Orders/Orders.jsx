
import React, { useContext, useState } from 'react';
import './Orders.css';
import { ShopContext } from '../../Context/ShopContext';
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const fetchPostalDetails = async (postalCode) => {
  const response = await fetch(`https://api.postalpincode.in/pincode/${postalCode}`);
  const data = await response.json();

  if (data[0].Status === "Error") {
    throw new Error('Postal code not found');
  }

  return data[0].PostOffice[0]; // Return the first Post Office entry
};

const Orders = () => {

   const {cart, price, enable, delivery,  Breadcrumbs, setCurrentStep, setIsComplete} = useContext(ShopContext);
   const navigate = useNavigate();
   
   const [error, setError] = useState("");
   const [isFormVisible, setFormVisible] = useState(true); 
   const [savedAddress, setSavedAddress] = useState('');
   const [message, setMessage] = useState("");
   const [address, setAddress] = useState({
    state : "",
    district: "",
    name : "",
    mobile: "",
    street: "",
    town : "",
    postalCode : "",
   })

   const handleCheckoutAddress = (event) =>{
      event.preventDefault();

      if(savedAddress){ 
          navigate('./place-order')
          setCurrentStep(prevStep =>{
                      if(prevStep === Breadcrumbs.length){
                          setIsComplete(true);
                      }else{
                          return prevStep +1
                      }
          })
      }
      setMessage("Please fill the address please")
  }

//   

const handlePincode = async (e) =>{
  e.preventDefault();

  const postalCode = e.target. value;
  setAddress((prevAddress) => ({...prevAddress, postalCode}))

  if(postalCode.length === 6){
    try{
      const postalDetails = await fetchPostalDetails(postalCode);
      setAddress((prevAddress) => ({
        ...prevAddress,
        district: postalDetails.District,
        state: postalDetails.State,
      }));
      setMessage("");
    }catch(error){
      setMessage("Invalid postal code");
    }finally{
      console.log("loading");
    }
  }
}

const handleInputChange = (e) => {
  e.preventDefault();
    setAddress({...address, [e.target.name]: e.target.value});
  };

  const handleSubmitAddress = async (e) =>{
    e.preventDefault();

    if(address.name == '' || address.mobile == '' || address.street == '' || address.postalCode.length == '' ){
        // setMessage("please fill the form First");
        setFormVisible(true)
    }else{
      setSavedAddress(address);
      setFormVisible(false);
      console.log(savedAddress)
    }
  }


    // -------------- GET ADDRESS BY LATITUDE AND LONGITUDE ----------


    // useEffect(() =>{
    //     navigator.geolocation.getCurrentPosition(pos =>{
    //         const {latitude, longitude} = pos.coords;
    //         console.log(latitude, longitude);
    //         const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
    //         fetch(url)
    //          .then(res => res.json())
    //          .then(res => {
    //             console.log(res);
    //          })
    //     })
    // },[])


  return (
    <div className='orders-page'>
      {message && <p>{message}</p>}
      
      <div className='address-side' >
       {
       isFormVisible ?(
        
            <form onSubmit={handleSubmitAddress}>
               <div>
                  <h5>CONTACT DETAILS</h5>
                  <input type='text' name='name' value={address.name} placeholder='Name*' onChange={handleInputChange} required />
                  <input type='text' name='mobile' value={address.mobile} placeholder='Mobile No*' onChange={handleInputChange} required />
               </div>
               <div>
                  <h5>ADDRESS</h5>
                  <input type='text' name='pincode' value={address.postalCode} onChange={handlePincode} placeholder='Pin Code*' required />
                  <input type='text' name='street' value={address.street} placeholder='Address (House No. Building, Street, Area)*' onChange={handleInputChange} required />
                  <input type='text' name='town' value={address.town} placeholder='Locality / Town*' onChange={handleInputChange} required />
                  <div className='sub-div'>
                     <input type="text" name='district' value={address.district} placeholder='City / District*' readOnly={true} />
                     <input type="text" name='state' value={address.state} placeholder='State*' readOnly={true} />
                  </div>
               </div>
               <div className='address-saveOpt'>
                  <h5>SAVE ADDRESS</h5>
                  <button>Home</button>
                  <button>Work</button>
               </div>
               <div className='address-checkbox'>
                  <input type='Checkbox' />
                  <label>Make this my default address</label>
               </div>
               <button className='address-button' type='submit'>ADD ADDRESS</button>
            </form>
            
       )
       :savedAddress ? (
        <div className='save-address-sec'>
          <div className='addAddress-btn'>
              <button onClick={() => setFormVisible(true)}> +</button>
          </div>
          <div className='saved-address'>
          <div className='saved-details'>
            <h6>{savedAddress.name}</h6>
            <p>{savedAddress.mobile}</p>
            <div className='street'>
              <p>{savedAddress.street},</p>
              <p>{savedAddress.town}</p>
            </div>
            <div className='district'>
              <p>{savedAddress.district},</p>
              <p>{savedAddress.postalCode}</p>
            </div>
            <p>{savedAddress.state}</p>
            </div>
            <div className='saved-edit'>
               <button onClick={() => setFormVisible(true)}> <FaRegEdit /> </button>
            </div>
            </div>
            
        </div>
       ): null}
       </div>
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
                <button className='checkout-BTN' onClick={handleCheckoutAddress}>Checkout</button>
            </div>
       </div>
    </div>
  )
}

export default Orders
