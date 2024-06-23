
import React from 'react'
import Menu from './Menu/Menu';
import About from './About/About';
import Reviews from './Reviews/Reviews';
import Banner from './Banner/Banner';

const Home = ({data, handleClick, login, setPopUp}) => {
  return (
    <div>
        <Banner />
        <Menu data={data} handleClick={handleClick} login={login} setPopUp={setPopUp} />
        <About />
        <Reviews />
    </div>
  )
}

export default Home;
