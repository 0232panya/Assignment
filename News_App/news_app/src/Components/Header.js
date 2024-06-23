
import React from 'react'


const Header = ({setCategory}) => {
  return (
    <div>
        <header>
            <div className='header-name'>
                <div onClick={() => setCategory("general")}>
                    <img src='https://blog.pencils.com/wp-content/uploads/2017/03/New_York_Daily_News_logo1.png' alt='' />
                </div>
            </div>
            
            <div className='menu-item'>
                <ul>
                    <li><div onClick={() => setCategory("business")}>business</div></li>
                    <li><div onClick={() => setCategory("health")}>health</div></li>
                    <li><div onClick={() => setCategory("science")}>science</div></li>
                    <li><div onClick={() => setCategory("technology")}>technology</div></li>
                    <li><div onClick={() => setCategory("entertainment")}>entertainment</div></li>
                </ul>
            </div>
        </header>
    </div>
  )
}

export default Header
