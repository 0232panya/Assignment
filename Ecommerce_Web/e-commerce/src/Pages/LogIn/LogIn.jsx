
import React, { useState } from 'react';
import './Login.css'; // Assuming you want to add custom styles
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Register from './Register/Register';

const LogIn = ({setPopUp}) => {
  // State to store email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  
  const [switchAccount, setSwitchAccount] = useState("Login");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    
    try{
      await signInWithEmailAndPassword(auth, email, password);
      // console.log("userlogged in successfully");
      window.location.href = '/'
    }catch(error){
      // console.log(error.message)
    }
    
  };

  return (
    <div className="login-popup">
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      
      <div className='loginpopup-box'>

          <div className='loginPopUp-CloseBTN'>
                <button onClick={() => setPopUp(false)}>X</button>
          </div>

      {switchAccount === 'Login' && <div className='form'>

        <div className='Form-title'>
            <h2> Welcome Back</h2>
            <p>Enter Your Account Credentials to view your orders.</p>
        </div>

        <form onSubmit={handleSubmit}>
            <input type='text' placeholder="Enter Your Email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
            <input type='password' placeholder="Enter Your Passward" value={password} onChange={(e) => setPassword(e.target.value)}/>

            <button className='login-btn'>{loading ? 'Logging in...' : 'Log In'}</button>
        </form>

        <div className='hr'>
            <div className='div-hr'><hr/></div>
            <div className='div-or'>OR</div>
            <div className='div-hr'><hr/></div>
        </div>

        <div className='signbutton'>
            <button><FaFacebookSquare className='facebook' /><p>SignIn with Facebook </p> </button>
            <button><FcGoogle className='google' /><p> SignIn with Google </p>  </button>
        </div>

        <div className='signUp-'>
            <p>Don't have an account? <a onClick={() => setSwitchAccount('signup')}>Sign Up</a></p>
        </div>

      </div>}

      {switchAccount === 'signup' && <Register setSwitchAccount={setSwitchAccount} /> }

      </div>
    </div>
  );
};

export default LogIn;

