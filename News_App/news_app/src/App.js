
import './App.css';
import { useEffect, useState } from "react";
import Header from './Components/Header';
import NewsArticles from './Components/NewsArticles';

function App() {

  const [news, setnews] = useState([]);
  const [isLoading, setISLoading] = useState(false);
  const [category, setCategory] = useState("general")

  useEffect(() =>{
    setISLoading(true);
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=258e5900074a45ff887ddb6c0deb6b35`)
    .then(res => res.json())
    .then((resp)=>{
      setnews(resp.articles);
      console.log(resp)
      setISLoading(false);
    })
  },[category])


  return (
    <div className="App">  
      <Header setCategory={setCategory} />
        <NewsArticles news={news} isLoading={isLoading}/>
    </div>
  );
}

export default App;
