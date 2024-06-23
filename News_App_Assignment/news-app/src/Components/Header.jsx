
import React, { useState } from 'react'

const Header = ({setCategory, category}) => {

    const [toggle, setToggle] = useState(false);

  return (
    <div>
        <header>
            <div className='header-name'>
                <div onClick={() => setCategory("general")}>
                    <img src='https://blog.pencils.com/wp-content/uploads/2017/03/New_York_Daily_News_logo1.png' alt='' />
                </div>
            </div>
            
            <div className='menu-item'>
                
                {toggle && <ul className='responsive-nav'>
                    <li onClick={() => setToggle(false)} className='close'><a href='/#'>X</a></li>
                    <li className="sideBar-li" onClick={() => setCategory("general")} >General</li>
                    <li className="sideBar-li" onClick={() => setCategory("business")} >business</li>
                    <li className="sideBar-li" onClick={() => setCategory("health")} >health</li>
                    <li className="sideBar-li" onClick={() => setCategory("science")} >science</li>
                    <li className="sideBar-li" onClick={() => setCategory("technology")} >technology</li>
                    <li className="sideBar-li" onClick={() => setCategory("entertainment")} >entertainment</li>
                </ul>}
                
                <div className='menu-bar'>
                <ul>

                    <li className={category === 'general' ? "li active" : "li" } onClick={() => setCategory("general")} >General</li>
                    <li className={category === 'business' ? "li active" : "li" } onClick={() => setCategory("business")} >business</li>
                    <li className={category === "health" ? "li active" : "li" } onClick={() => setCategory("health")} >health</li>
                    <li className={category === "science" ? "li active" : "li" } onClick={() => setCategory("science")} >science</li>
                    <li className={category === "technology" ? "li active" : "li" } onClick={() => setCategory("technology")} >technology</li>
                    <li className={category === "entertainment" ? "li active" : "li" } onClick={() => setCategory("entertainment")} >entertainment</li>
                
                </ul>
                    <div>
                        <li onClick={() => setToggle(true)} className='list'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" stroke='#6d6b6b' d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg> 
                        </li>
                    </div>
                </div>
            </div>

            
        </header>
    </div>
  )
}

export default Header
