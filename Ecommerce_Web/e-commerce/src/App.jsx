
import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Collection from './Pages/Collection/Collection';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Product from './Pages/Product';
import LogIn from './Pages/LogIn/LogIn';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Orders from './Components/Orders/Orders';
import Cart from './Components/Cart/Cart';
import CheckOut from './Pages/CheckOut/CheckOut';
import Register from './Pages/LogIn/Register/Register';
import Maintenance from './Maintenance/Maintenance';


const App = () => {

  const [isMaintenance, setIsMaintenance] = useState(false);

  useEffect(() =>{
    if(isMaintenance){
      document.body.style.overflow = "hidden";
    }else{
      document.body.style.overflow = "auto";
    }

    return() =>{
      document.body.style.overflow = "auto";
    };

  },[isMaintenance]);

  return (
    <div>
    <BrowserRouter>
      {isMaintenance && <Maintenance />}
            <NavBar />  
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/collection' element={<Collection />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/product/:productId' element={<Product />} />
                <Route path='/checkout' element={<CheckOut />} >
                    <Route path='/checkout/cart' element={<Cart />} />
                    <Route path='/checkout/place-order' element={<PlaceOrder />} />
                    <Route path='/checkout/orders' element={<Orders />} />
                </Route>
                <Route path='/login' element={<LogIn />} />
                <Route path='/register' element={<Register />} />  
            </Routes>
            <Footer />      
    </BrowserRouter>
    </div>
  )
}

export default App
