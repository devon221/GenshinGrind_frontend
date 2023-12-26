import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../components/submit-icon.png'
import './signup.css'
const Signup = () => {
  return (
    <div className='signup-container'>
      <div className='signup-box'>
        <h1>Signup</h1>
        <form className='signup-details-container'>

          <input type='text' placeholder='Username'></input>


          <input type='text' placeholder='Email'></input>
          <input type='password' placeholder='Password'></input>
          <div className='icon-box'>
            <Link to='/home'><img src={icon}  ></img></Link>
          </div>
        </form>
        <Link to={'/'}> <p className='signup-prompt' >Already have an Account? Login in </p></Link>
      </div>

    </div>
  )
}

export default Signup