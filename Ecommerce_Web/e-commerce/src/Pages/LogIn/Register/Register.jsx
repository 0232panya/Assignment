
import React, { useState } from 'react';
import './Register.css'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../../firebase';
import { setDoc, doc } from 'firebase/firestore';

const Register = ({setSwitchAccount}) => {
  
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try{
        await createUserWithEmailAndPassword(auth, email, password);
        const user= auth.currentUser;
        if(user){
            await setDoc(doc(db, 'Users', user.uid),{
                email: user.email,
                firstName: fname,
                lastName : lname,
            })
        }
        // console.log('user register successfully')
        window.location.href = '/login'
    }catch(error) {
        console.log(error.message)
    }
    
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className='register-title'>
          <h2>Welcome to Our Store</h2>
        </div>
{/*   */}

        <form className='register-form' onSubmit={handleSubmit}>
          
            <input
              type="text"
              name="name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              placeholder="Enter your first name"
              required
            />

            <input
              type="last name"
              name="lname"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              placeholder="Enter your last name"
              required
            />

            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />

            <input
              type="password"
              name="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="enter your password"
              required
            />

          <button type="submit" className='register-btn' disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>

        <div className='Login-'>
            <p>Already have an account? <a onClick={() => setSwitchAccount('Login')}>Log In</a></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
