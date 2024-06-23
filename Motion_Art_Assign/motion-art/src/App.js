
import gsap from 'gsap';
import './App.css';
import { useEffect } from 'react';
import { useGSAP } from '@gsap/react';

function App() {

  useGSAP(()=>{
    gsap.to(".box",{
      x : 1000,
      duration : 1,
      delay : 2,
      rotate : 360,
      borderRadius : "50%",
      backgroundColor : "blue"
    })
  })

  useEffect(()=>{
      fetch('https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json')
        .then(res => res.json())
        .then(res =>{
          console.log(res)
        })
   })

  return (
    <div className="App">
      <div className="box">
         
      </div>
      
    </div>
  );
}

export default App;
