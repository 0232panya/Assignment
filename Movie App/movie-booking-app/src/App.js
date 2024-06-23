
import { useState, useEffect } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios'
import DetailPage from './Components/DetailPage/DetailPage';


function App() {

  const [movie, setMovie] = useState([]);
  // const [detailPage, setDetailPage] = useState([]);

    useEffect(()=>{
        axios.get("https://api.tvmaze.com/search/shows?q=all")
        .then((res) =>{
            setMovie(res.data)
            console.log(res)
        })
    },[]);

    // const handleDetailsPage = (ele) => {
    //   setDetailPage(ele)
    //   console.log(detailPage);
    // }


  return (
    <div className="App">
      
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie-detail-page/:id" element={<DetailPage movie={movie} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
