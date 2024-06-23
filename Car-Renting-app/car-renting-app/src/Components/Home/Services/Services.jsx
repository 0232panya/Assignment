
import React, { useEffect, useState } from 'react'
import './Services.css';
import Cards from './Cards/Cards';

const Services = () => {

  const [carList, setCarList] = useState([]);

  // const [visiblecards, setVisibleCards] = useState(6);

  const [filter, setFilter] = useState('Maruti Suzuki');

  useEffect(()=>{
    fetch("carApp.json")
    .then(res => res.json())
    .then((res) =>(
      setCarList(res)
    ))
  },[]);

  // function seeMoreBtn() {
  //   setVisibleCards((preValue) => preValue + 3)
  // }

  // function filterItem(cars){
  //   const carsfilter = carList.filter((car) => (
  //     car.Company === cars

  //     ));
  //   setCarList(carsfilter);
  // }
  

  return (
    <div id='Services' className='services'>
      <div className='services-title'>
        <p>OUR BEST SERVICES</p>
        <h1>Explore Our Top Deal From Top-Rated Dealer</h1>
      </div>
      <div>

          {/* -----------------  DROPDOWN BUTTON ---------------------- */}

          <div class="dropdown car-dropdown">
            <a class="btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Select the Car
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
              </svg>
            </a>

            <ul class="dropdown-menu">
              <li><button onClick={() => setFilter('Maruti Suzuki')}>Maruti Suzuki</button></li>
              <li><button onClick={() => setFilter('Tata Motors')}>Tata Motors</button></li>
              <li><button onClick={() => setFilter('Hyundai')}>Hundai</button></li>
              <li><button onClick={() => setFilter('Toyota')}>Toyota</button></li>
              <li><button onClick={() => setFilter('Mahindra')}>Mahindra</button></li>
              <li><button onClick={() => setFilter('Volkswagen')}>Volkswagen</button></li>
              <li><button onClick={() => setFilter('Honda')}>Honda</button></li>
            </ul>
          </div>

          {/* --------------------- NORMAL BUTTONS ---------------------- */}

      <div className='car-cards-filterBTN'>
        <button className={filter === 'Maruti Suzuki'? "Active buttonmenu" : "buttonmenu"} onClick={() => setFilter('Maruti Suzuki')}>Maruti Suzuki</button>
        <button className={filter === 'Tata Motors'? "Active buttonmenu" : "buttonmenu"} onClick={() => setFilter('Tata Motors')}>Tata Motors</button>
        <button className={filter === 'Hyundai'? "Active buttonmenu" : "buttonmenu"} onClick={() => setFilter('Hyundai')}>Hundai</button>
        <button className={filter === 'Toyota'? "Active buttonmenu" : "buttonmenu"} onClick={() => setFilter('Toyota')}>Toyota</button>
        <button className={filter === 'Mahindra'? "Active buttonmenu" : "buttonmenu"} onClick={() => setFilter('Mahindra')}>Mahindra</button>
        <button className={filter === 'Volkswagen'? "Active buttonmenu" : "buttonmenu"} onClick={() => setFilter('Volkswagen')}>Volkswagen</button>
        <button className={filter === 'Honda'? "Active buttonmenu" : "buttonmenu"} onClick={() => setFilter('Honda')}>Honda</button>
      </div>
      </div>
      <div className='row container'>
        {
          carList.map((list)=>{
            return(
            list.Company === filter && (
              <div key={list.id} className='col-lg-4 col-sm-12'>
              <Cards item={list} />
              </div>
            )
          )
          })
        }
      </div>


    </div>
  )
}

export default Services
