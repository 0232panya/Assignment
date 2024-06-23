
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from './UserReducer';

const Update = () => {

    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const {id} = useParams();
    const existingUser = users.filter(f => f.id == id);
    const {name ,email} = existingUser[0];
    const navigate = useNavigate();

    const [upName, setUpName] = useState(name);
    const [upEmail, setUpEmail] = useState(email);

    const handleUpdate = (e) =>{
        e.preventDefault();
        dispatch(updateUser({
            id : id,
            name : upName,
            email : upEmail
        }));

        navigate('/')
    }

  return (
    <div className='add-new-user'>
        <h3>Update User</h3>
        <form onSubmit={handleUpdate}>
            <input type='text' name='name' className='form-control' value={upName} onChange={e => setUpName(e.target.value)} placeholder='Enter Name' /> <br />
            <input type='email' name='email' className='form-control' value={upEmail} onChange={e => setUpEmail(e.target.value)} placeholder='Enter email' />

            <button type='submit' className='btn btn-primary'>Update</button>
        </form>
    </div>
  )
}

export default Update;
