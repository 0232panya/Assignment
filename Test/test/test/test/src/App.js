import {useState} from "react";
import './App.css';
import './component/ToDoList';
import ToDoList from "./component/ToDoList";

function App() {

  const [inputlist, setInputlist] = useState("");
  const [items, setItems] = useState([]);
  const [toggleBtn, setToggleBtn] = useState(true);

  const itemEvent = (e) => {
    setInputlist(e.target.value)
  }

  const listofItems =() => {
    setItems((oldItems) =>{
      return [...oldItems, inputlist];
    });
    setInputlist('');
    setToggleBtn('')
  }

  function deleteItem(id){
    console.log('Deleted');
    setItems((oldItems) => {
      return oldItems.filter((arrEle, index)=>{
        return index !== id;
      })
    })
}

function editItem(id){
  console.log("EditItem");
  // setItems((oldItems) => {
  //   return oldItems.map((arrEle, index) =>{
  //     if(index !== id){
  //       return;
  //     }else{
  //       return index = 
  //     }

  //   });
  // });
  let newEditItem = items.find((elem) => {
    return elem.id == id
  });
  console.log(newEditItem);
  // return setToggleBtn;
}

  return (
    <div className="App" >
      <h3>To Do Search</h3>
      <div>
        <input type="text" name="Search" className="col-6 input" placeholder="Search ToDo Here" value={inputlist} onChange={itemEvent}/>
        {
        toggleBtn ? <button type="search" className="col-6 Button" onClick={listofItems}>Search</button>
         : editItem
        }
         {/* {<button type="search" className="col-6 Button" onClick={listofItems}>Search</button>} */}
      </div>
      <hr></hr>
      <h4>To Do List</h4>
      <ol>
        {/* <li>{inputlist}</li> */}

        {items.map((itemval, index) =>{
          return <ToDoList
            key={index}
            id = {index}
            text ={itemval}
            onSelect = {deleteItem}
            onSelectEdit = {editItem}
          />
          
        })}
        
      </ol>
    </div>
  );
}

export default App;
