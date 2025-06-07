
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'; 
import './Navbar.css';
import { FaCartShopping } from "react-icons/fa6";
import { BsList } from "react-icons/bs";
import LoginPopUp from './LoginPopUp/LoginPopUp';
import { IoSearch } from "react-icons/io5";
// import data from '../Home/Menu/Menu.json'

const Navbar = ({data, size, login, setLogin, popUp, setPopUp, timerID}) => {

    const [toggle, setToggle] = useState(false);
    const [inputBox, setInput] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const valRef = useRef();

    const handleSearchBTN = (e) =>{
        e.preventDefault()
        setInput(true);
    }

    const handleInputChange = (e) =>{
        // e.preventDefault()
        setInputValue(e.target.value);
        console.log(inputValue)
    }

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
                <div className='search-bar' >
                    <form className={inputBox ? "form active" : "form"}>
                        {inputBox && <input type='text' placeholder='Search' onChange={(e) => handleInputChange(e)} ref={valRef} value={inputValue} className='input-search' />}
                        <button onClick={(e) =>handleSearchBTN(e)} ><IoSearch className='icon-search' /></button>
                    </form>
                    {/* <div>
                        {
                            data.filter((item) =>{
                                const searchTerm = inputValue.toLowerCase();
                                const CatName = item.title.toLowerCase();
                                return searchTerm && CatName.startsWith(searchTerm);
                            }).map((i) =>{
                                <div onClick={() => setInputValue("")}>{i.title}</div>
                            })
                        }
                    </div> */}
                </div>

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
                        {popUp && <LoginPopUp setPopUp={setPopUp} setLogin={setLogin} timerID={timerID} />}</div>
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
