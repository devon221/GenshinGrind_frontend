import React from 'react'
import './home.css'
import Card from '../components/Card' 
import { useNavigate } from 'react-router-dom'
const Farm = () => {
  const navigate = useNavigate();
  const handleClick1 = () => {
    navigate('/Home');
  };
  const handleClick2 = () => {
    navigate('/Weapons');
  };
  const characters = ['Xiao', 'Kamisato_Ayaka', 'Bennett', 'Diluc', 'Diluc', 'Diluc', 'Diluc', 'Diluc'  ];
  return (
    <div className='home-container'>
      <div className='content-navbar'>
        <div className='day-container'>MONDAY</div>
        <div className='navbox'>
          <ul>
            <li className='nav-item' onClick={handleClick1}>Characters</li>
            <li className='nav-item selected-nav' >Farming</li> 
            <li className='nav-item' onClick={handleClick2}>Weapons</li>
          </ul>
        </div>
      </div>
      <div className='character-container'>
      <p className='character-title'>Characters and Weapons that can be farmed today</p>
      </div>
    </div>
  )
}

export default Farm