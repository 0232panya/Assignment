import React, { useState } from 'react'

const ToDo = () => {

  const [value, setValue] = useState("");
  const [items, setItem] = useState([]);

  function addItem(e){
    e.preventDefault()

    if(!value){
      alert("please add To Do");
      return;
    }

    const item = {
      id : Math.floor(Math.random() * 1000),
      value : value
    }

    setItem(list => [...list, item]);
    console.log(item)

    setValue("")

  }

  return (
    <div>
        <form >
           <input type='text' value={value} placeholder="write a To Do" onChange={(e)=> setValue(e.target.value)} />
           <button onClick={(e) => addItem(e)}>+</button>
        </form>
        <div>
          <ul>
            {
              items.map(e =>(
                <li key={e.id}>{e.value}</li>
              ))
            }
          </ul>
        </div>
    </div>
  )
}

export default ToDo
