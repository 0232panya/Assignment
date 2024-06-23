
import React, { useState } from 'react'
import { Link } from 'react-router-dom'; 
import './Navbar.css';
import { FaCartShopping } from "react-icons/fa6";
import { BsList } from "react-icons/bs";
import LoginPopUp from './LoginPopUp/LoginPopUp';

const Navbar = ({size, login, setLogin, popUp, setPopUp}) => {

    const [toggle, setToggle] = useState(false);

  return (
    <nav>
        <a href='/'>
        <div className='cafe-logo'>
                <img src='https://www.freepnglogos.com/uploads/coffee-logo-png/coffee-logo-design-creative-idea-logo-elements-2.png' alt='' />
                <p>Coder's Cafe</p>
        </div>
        </a>
        <div className='cafe-menu-bar'>
            <div className='cafe-menu'>

               {toggle && <ul className='responsive-Nav'>
                    <li onClick={() => setToggle(false)} className='close'><a>X</a></li>
                    <li><a href='/#Banner'>Home</a></li>
                    <li><a href='/#Menu'>Menu</a></li>
                    <li><a href='/#About'>About</a></li>
                    <li><a href='/#Reviews'>Reviews</a></li>
                </ul>}

                <ul className='nav'>
                    <li className='nav-windowScreen'><a href='/#Banner'>Home</a></li>
                    <li className='nav-windowScreen'><a href='/#Menu'>Menu</a></li>
                    <li className='nav-windowScreen'><a href='/#About'>About</a></li>
                    <li className='nav-windowScreen'><a href='/#Reviews'>Reviews</a></li>
                   
                </ul>
                <div>
                    {
                        !login ? <div> <button className='login-btn' onClick={() => setPopUp(true)}>LogIn</button>
                        {popUp && <LoginPopUp setPopUp={setPopUp} setLogin={setLogin} />}</div>
                        : <div className='after-login'> <button className='login-btn' onClick={() => setLogin(false)}>LogOut</button>
                                <Link to={"/cart"}><button className='cart-btn'><FaCartShopping className='cart' /><span>{size}</span></button></Link>
                            </div>
                    }
                
                </div>
                
                <li onClick={() => setToggle(true)} className='list'><BsList className='list-style'/></li>
            </div>
        
        </div>
    </nav>
  )
}

export default Navbar;
