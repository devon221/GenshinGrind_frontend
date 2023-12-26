import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import icon from '../components/submit-icon.png'
 
const Login = () => {
   
    return (
        <div className='login-container'>
            <div className='login-box'>
                <h1>Login</h1>
                <form className='login-details-container'>
                    <input type='text' placeholder='Username'></input>
                    <input type='password' placeholder='Password'></input>
                    <div className='icon-box'   >
                        <Link to='/home'><img src={icon}  ></img></Link>
                    </div>
                </form>
                <Link to={'/signup'}> <p className='signup-prompt' >Dont have an Account? Sign Up Already</p></Link>
            </div>
            
        </div>
    )
}

export default Login