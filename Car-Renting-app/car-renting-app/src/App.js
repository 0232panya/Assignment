
import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/HomePage/Index';
import Navbar from './Components/Home/Navbar/Navbar';
import Footer from './Components/Home/Footer/Footer';

const App = () => {

  return (
    <div className='app'>
      <Navbar />
      <BrowserRouter>
        <Routes>
              <Route path="/" element={<Home /> } />      
        </Routes>
      </BrowserRouter>
      <Footer />
      
    </div>
  )
}

export default App
