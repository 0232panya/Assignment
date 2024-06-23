
import React, { useState } from 'react'
import './LoginPopUp.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginPopUp = ({setPopUp, setLogin}) => {

    const initValue = { email: "" , password: ""};

    const [value, setValue] = useState(initValue);
    
    const [alert, setAlert] = useState(false);

    // switch account between login and signup
    const [switchAccount, setSwitchAccount] = useState("Login");

    const email = value.email;
    const password = value.password;

    const handleForm =(e) =>{
        e.preventDefault();

        if(email === "" || password === "" ){
            // alert(" Please fill the form");
            setAlert(true);
            setTimeout(() => {
                setAlert(false);
            },6000)
            
        }else{
            setLogin(true);
        }


    }

  return (
    <div className='login-popup'>
        <div className='popUp-alert'>
            {
                alert && <div> <p>Please fill the form </p> <button className='popup-alertBTN' onClick={() => setAlert(false)}> X</button></div>
            }
        </div>
        <div className='loginpopup-box'>


            <div className='loginPopUp-CloseBTN'>
                <button onClick={() => setPopUp(false)}>X</button>
            </div>


            <div className='LoginPopUp-Form'>

                <div className='login-img-side'>
                    <img src='https://th.bing.com/th/id/OIP._eL77FhcfkAN35HR0N62UgHaLH?rs=1&pid=ImgDetMain' alt='' />
                </div>

                {switchAccount === 'Login' && <div className='form'>

                    <div className='Form-title'>
                        <h2> Welcome Back</h2>
                        <p>Enter Your Account Credentials to view your orders.</p>
                    </div>

                    <form onSubmit={handleForm}>
                        <input type='text' placeholder="Email or Phone Number" value={email} onChange={(e) => setValue(e.target.value)}/>
                        <input type='password' placeholder="Enter Your Passward" value={password} onChange={(e) => setValue(e.target.value)}/>

                        <button>Log In</button>
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
                        <p>Don't have an account? <a onClick={() => setSwitchAccount("SignUp")}>Sign Up</a></p>
                    </div>

                </div>}

                {switchAccount === "SignUp" && <div className='form'>
                    
                    <div className='Form-title'>
                        <h2 style={{margin: "0 0 10px"}}> Welcome To Coder's Cafe</h2>
                        {/* <p>Enter Your Account Credentials to view your orders.</p> */}
                    </div>

                    <form onSubmit={handleForm}>
                        <input type='text' placeholder='Enter Your Name' />
                        <input type='text' placeholder="Enter Your Email" value={email} onChange={(e) => setValue(e.target.value)}/>
                        <input type='text' placeholder="Enter password" value={email} onChange={(e) => setValue(e.target.value)}/>
                        <input type='password' placeholder="Re-Enter Passward" value={password} onChange={(e) => setValue(e.target.value)}/>

                        <button>Sign Up</button>
                    </form>

                    <div className='signUp-'>
                        <p>Already have an account?&nbsp; <a onClick={() => setSwitchAccount("Login")}>Log In</a></p>
                    </div>
                    
                </div>}
            </div>
        </div>
    </div>
  )
}

export default LoginPopUp;
