import React, { useState } from 'react'

const Number = () => {

    const [number, setNumber] = useState(0);

    function increment(){
        setNumber(number + 1)
    }

    function decrement(){

        if(number > 0 ){
            setNumber(number -1)
        }
    }

  return (
    <div>
        <h1>{number}</h1>
        <button onClick={increment}> + </button>
        <button onClick={decrement}> - </button>
    </div>
  )
}

export default Number
