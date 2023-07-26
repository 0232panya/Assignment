//import logo from './logo.svg';
import './App.css';
import {useState} from 'react'; 

function App() {
  return (
    <div className="App">
      <Board></Board>
    </div>
  );
}

function Board(){

  const [marks , setMark] = useState([1,2,0,0,0,0,0,0,0]);

  const changeMark =(i) =>{
      const m = [...marks];
      m[i] = 1;
      setMark(m);
  }


  return(
    <div className="Board">
      <div>
        <Block mark={marks[0]} position={0} changeMark={changeMark} ></Block>
        <Block mark={marks[2]} position={1} changeMark={changeMark}></Block>
        <Block mark={marks[1]} position={2} changeMark={changeMark}></Block>
      </div>
      <div>
        <Block mark={marks[3]} position={3} changeMark={changeMark}></Block>
        <Block mark={marks[4]} position={4} changeMark={changeMark}></Block>
        <Block mark={marks[5]} position={5} changeMark={changeMark}></Block>
      </div>
      <div>
        <Block mark={marks[6]} position={6} changeMark={changeMark}></Block>
        <Block mark={marks[7]} position={7} changeMark={changeMark}></Block>
        <Block mark={marks[8]} position={8} changeMark={changeMark}></Block>
      </div>
      
    </div>
  )
}

function Block({mark, changeMark}){
  return <div className={'Block marks${mark}'}
          onClick={e=>changeMark()} >
      </div>;
  
}

export default App;
