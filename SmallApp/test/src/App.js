
import './App.css';
import Number from './Component/Number';
import Form from './Component/Form';
import ToDo from './Component/ToDo';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Quiz from './Component/Quiz';

function App() {

  // const [api, setApi] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(()=>{
  //   setIsLoading(true)
  //   axios('https://dummyjson.com/users')
  //    .then((response) =>{
  //       setApi(response.data.users)
  //       // console.log(response.data.users)
  //       setIsLoading(false)
  //    })
  // },[]);

  return (
    <div className="App">
      {/* <Number />

        <ToDo /> */}
      {/* <Form api={api} isLoading={isLoading} /> */}

      <Quiz />
    </div>
  );
}

export default App;
