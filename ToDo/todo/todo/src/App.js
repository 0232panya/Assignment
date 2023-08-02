
import './App.css';
import React, { useState } from 'react';
// import ToDo from './Component/ToDo/ToDo';
// import Header from './Component/Header/Header';

const App = () => {

  const [newItem,setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem(){

    if(!newItem){
      alert("Enter an Item");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    } 

    setItems(oldList => [...oldList,item]);

    setNewItem("");

    console.log(items)
  }

  function deleteItem(id){
      const newArray = items.filter(item => item.id !== id);
      setItems(newArray)
  }

  // function editItem(ids){
  //     const editItems = items.filter(item => item.ids === "input");
  //     setItems(editItems);
  // }

  return <div className='container'>
      <div className='app-wrapper'>
        <div>
          {/* Header */}
        <h2>ToDo-List</h2>
          
          {/* Input of Item */}
          <div className='input'>
          <input 
                type="text" 
                name="TODO" 
                placeholder='Enter ToDo' 
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
            />
            <button className='button-Add' type='submit' onClick={() => addItem()}>Submit</button>

            </div>

          {/* List of Item */}

          <ul>
             {items.map(item =>{
              return(
                <li key={item.id}>
                  {item.value}
                  {/* <button className='edit' onClick={() => editItem(item.ids)}>Edit</button> */}
                  <button className='btn' onClick={() => deleteItem(item.id)}>Delete</button>
                </li>
              )
             })}

          </ul>

        </div>
      </div>
  </div>
}

export default App;
