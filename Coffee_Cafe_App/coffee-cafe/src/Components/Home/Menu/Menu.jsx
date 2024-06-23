
import React, {useState} from 'react'
import './Menu.css';
import data from './Menu.json';
import Card from './Card/Card';
import { FaCheck } from "react-icons/fa";

const Menu = ({data, handleClick,login, setPopUp }) => {

  const [filter, setfilter] = useState("Bevarages");

  // const [activeTab, setActiveTab] = useState("Be")

  return (
    <div id='Menu' className='menu'>
       <div className='menu-title'>
        <h1>Our Menu</h1>
       </div>
       <div className='menu-items'>
        <ul>
          <li className={filter === "Bevarages"?"menuLi Active" : "menuLi"} onClick={() => setfilter("Bevarages")}>Bevarages</li>
          <li className={filter === "Snacks"?"menuLi Active" : "menuLi"} onClick={() => setfilter("Snacks")}>Snacks</li>
          <li className={filter === "Dessert"?"menuLi Active" : "menuLi"} onClick={() => setfilter("Dessert")}>Desserts</li>
        </ul>
       </div>
       <div className='row container'>
          {
            data.map((menu) => {
              return(
                menu.Category === filter &&(
                  <div key={menu.id} className='col-5 col-sm-4 col-lg-3 col-md-4'>
                    <Card item={menu} handleClick={handleClick}  login={login} setPopUp={setPopUp} /> 
                   </div>
                ) 
              )
            })
          }
          
       </div>
    </div>
  )
}

export default Menu;
