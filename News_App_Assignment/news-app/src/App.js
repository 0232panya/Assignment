
import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import NewsArticle from './Components/NewsArticle';
import Pagination from './Components/Pagination';

function App() {

  const [news, setnews] = useState([]);
  const [category, setCategory] = useState("general");
  const [isLoading, setIsLoading] = useState(false);

  
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const per_Page = 24;

  useEffect(()=>{
    setIsLoading(true);
    fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${page}&pageSize=${per_Page}&apiKey=258e5900074a45ff887ddb6c0deb6b35`)
      .then(res => res.json())
      .then((resp) => {
        setnews(resp.articles);
        setTotalPage(resp.totalResults)
        console.log(resp)
        setIsLoading(false);
      })
  },[category,page]);

  return (
    <div className="App">
        <Header category={category} setCategory={setCategory}/>
        <NewsArticle news={news} isLoading={isLoading}  />

        <Pagination page={page} totalPage={totalPage} setPage={setPage} />
    </div>
  );
}

export default App;
