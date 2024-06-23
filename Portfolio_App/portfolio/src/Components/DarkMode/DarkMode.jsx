
import React from 'react';
import './DarkMode.scss';
// import { IoIosSunny } from "react-icons/io";
// import { FaMoon } from "react-icons/fa";

const DarkMode = () => {

    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
    }

    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
    }

    const toggleTheme = e => {
        if(e.target.checked) setDarkMode();
        else setLightMode();
    }

  return (
    <div className='darkMode'>
      <input className='darkmode' type='checkbox' id='darkmode-toggle' onChange={toggleTheme} />
      <label for="darkmode-toggle" className='switch'>
        {/* <IoIosSunny />
        <FaMoon /> */}
      </label>
    </div>
  )
}

export default DarkMode
