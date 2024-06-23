
import React, { useState } from 'react';
import { addUser } from './UserReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Create = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState("");

    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleChange =(e) =>{
        e.preventDefault();
        dispatch(addUser({id: users[users.length - 1].id + 1 , name, email}))
        
        if(!name || !email){
            alert("Please fill the form");
        }else{
            navigate('/')
        }
    }

  return (
    <div className='add-new-user'>
        <h3>Add New User</h3>
        <form onSubmit={handleChange} >
            <input type='text' name='name' className='form-control' onChange={(e) => setName(e.target.value)} placeholder='Enter Name' /> <br />
            <input type='email' name='email' className='form-control' onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' />

            <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
    </div>
  )
}

export default Create;
