
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Home.css'
import Card from '../Card/Card';
import { NavLink } from 'react-router-dom';

const Home = () => {

    const [movie, setMovie] = useState([]);  
    const [detailPage, setDetailPage] = useState([]);

    useEffect(()=>{
        axios.get("https://api.tvmaze.com/search/shows?q=all")
        .then((res) =>{
            setMovie(res.data)
            console.log(res)
        })
    },[]);

    const handleDetailsPage = (ele) => {
      setDetailPage([ele.show.id])
      console.log(detailPage);
    }

  return (
    <div className='home'>

        <div className='posterBanner'>
            <img src='https://th.bing.com/th/id/R.89653241a0d4f866ac9acd00da91c89a?rik=AuzVtH9gfcW4cg&riu=http%3a%2f%2fp-img.movetv.com%2fcms%2fimages%2f7cbe92586135058478098fd9b17a8c243580c7fc.jpg&ehk=heK7mKs3NG7l4K9Rg8PJ%2fruIepIMpdjsySfuiZ4X2A0%3d&risl=&pid=ImgRaw&r=0' alt='' />
        </div>


        <div className='tranding-movies'>
            <p>Top Tranding Movies</p>
            <div className='row row-cols-1 row-cols-lg-5 g-2 g-lg-3 container'>
                {
                    movie && movie.map((ele,key) =>(
                        <div key={key} className='col col-4 col-lg-3'>
                            <NavLink to={`movie-detail-page/${ele.show.id}`} >
                            <button onClick={() => handleDetailsPage(ele)}>
                                <Card data={ele} />
                            </button>
                            </NavLink>
                        </div>                
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Home;
