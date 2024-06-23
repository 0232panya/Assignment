
import React, { useState } from 'react'

const Form = ({api , isLoading}) => {
     
    const [input, setInput] = useState("")
    

    function handlesearch(e){
        setInput(api.filter(e => e.firstName.toLowerCase().includes(e.target.value)))
        console.log(e.target.value)
    }

  return (
    <div>
        <form >
            <input type='search' className='search-input' placeholder='Search' value={input} onChange={handlesearch} />
        </form>
        <div>
            <div className='text-field'>
                <h4>First Name</h4>
                <h4>Last Name</h4>
                <h4>Email</h4>
            </div>
            {
                isLoading ? <div> ...Loading </div> :
                api.map((element,i) =>(
                    <div key={i} className='text-field'>
                        <h5>{element.firstName}</h5>
                        <h5>{element.lastName}</h5>
                        <h5>{element.email}</h5>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Form
