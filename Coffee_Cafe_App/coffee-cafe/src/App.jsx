
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import data from './Components/Home/Menu/Menu.json';
import { useState } from 'react';
import Cart from './Components/Cart/Cart';
import About from './Components/Home/About/About';

function App() {

  const [cart, setCart] = useState([]);

  const [login, setLogin] = useState(false);
  const [popUp , setPopUp] = useState(false);


  const handleClick = (item) => {

    let isPresent = false;
    cart.forEach((product) => {
      if(item.id === product.id)
      isPresent = true;
    })
    if(isPresent){
      
      return;
    }
       
    setCart([...cart, item])
  }

  const handleChange = (carts, d) => {

    let ind = 0;
		cart.forEach((data, index)=>{
			if (data.id === carts.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].qty += d;

		if (tempArr[ind].qty === 0)
			tempArr[ind].qty = 1;

		setCart([...tempArr])

  }


  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar size={cart.length} login={login} setLogin={setLogin} popUp={popUp} setPopUp={setPopUp} />
        <Routes>
          <Route path='/' element={<Home data={data.menuCategary} handleClick={handleClick} login={login} setPopUp={setPopUp} />} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App
