
import React, {useState} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [toggle,settoggle] = useState(false);

    const [activetab, setActiveTab] = useState("#Banner")

  return (
       <nav>
        <div className='web-name'>RentalX</div>

{toggle &&<ul className='slidebar'>
    <li onClick={() => settoggle(false)}><a href='/#'>X</a></li>
    <li><a href='/#Banner'>Home</a></li>
    <li><a href='/#Ride'>Ride</a></li>
    <li><a href='/#Services'>Service</a></li>
    <li><a href='/#About'>About</a></li>
    <li><a href='/#Reviews'>Reviews</a></li>
  </ul>}

 <ul>
    <li className='windowscreen'><a className={activetab === "#Banner" ? "active a" : "a"} href='/#Banner' onClick={() => setActiveTab("#Banner")}>Home</a></li>
    <li className='windowscreen'><a className={activetab === "#Ride" ? "active a" : "a"}  href='/#Ride' onClick={() => setActiveTab("#Ride")}>Ride</a></li>
    <li className='windowscreen'><a className={activetab === "#Services" ? "active a" : "a"}  href='/#Services' onClick={() => setActiveTab("#Services")}>Service</a></li>
    <li className='windowscreen'><a className={activetab === "#About" ? "active a" : "a"}  href='/#About' onClick={() => setActiveTab("#About")}>About</a></li>
    <li className='windowscreen'><a className={activetab === "#Reviews" ? "active a" : "a"}  href='/#Reviews' onClick={() => setActiveTab("#Reviews")}>Reviews</a></li>
    {/* <li className='windowscreen'><a href='/#'>Privacy</a></li> */}
    <li onClick={() => settoggle(true)} className='list'><a href='/#'>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
      </svg>
      </a></li>
  </ul>
</nav> 
    
  )
}

export default Navbar;
