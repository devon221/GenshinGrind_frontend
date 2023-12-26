import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import ReactModal from 'react-modal';
import addicon from '../components/add-icon.png'
import './home.css'
import Card from '../components/Card' 
import data from '../components/data.json'
const Farm = () => {
  const navigate = useNavigate();
  const handleClick1 = () => {
    navigate('/Home');
  };
  const handleClick2 = () => {
    navigate('/Farming');
  };
  const characters = []
  const [open , setisOpen] = useState(false);
  const [filterval , setfilterval] = useState('');
 
  const characters2 = ['Xiao', 'Kamisato_Ayaka', 'Bennett', 'Diluc','Xiao', 'Kamisato_Ayaka', 'Bennett', 'Diluc','Xiao', 'Kamisato_Ayaka', 'Bennett', 'Diluc','Xiao', 'Kamisato_Ayaka', 'Bennett', 'Diluc','Xiao', 'Kamisato_Ayaka', 'Bennett', 'Diluc'];  
   
 
  const allCharactersSet = new Set();

  Object.entries(data).forEach(([day, categories]) => {
    Object.entries(categories).forEach(([category, characters]) => {
      characters.forEach((character) => {
        allCharactersSet.add(character);
      });
    });
  });
  
  const allCharacters = [...allCharactersSet];
  
  const cardElements = allCharacters.map((character) => (
    <Card props={character} key={character} />
  ));
 
  return (
    <div className='home-container'>
      <div className='content-navbar'>
        <div className='day-container'>MONDAY</div>
        <div className='navbox'>
          <ul>
            <li className='nav-item' onClick={handleClick1}>Characters</li>
            <li className='nav-item' onClick={handleClick2}>Farming</li> 
            <li className='nav-item selected-nav' >Weapons</li>
          </ul>
        </div>
      </div>
      <div className='character-container'>
      <p className='character-title'>Click on the weapon you want to remove.</p>
          <div className='character-box'>
          {characters.map((character) => {
            return (<Card props={character} key={character} />)
          })}
          </div>
          
         
      <div className='character-menu' onClick={() => {setisOpen(!open)}}>
        <img src={addicon}></img>
      </div>
      <ReactModal
      isOpen={open} 
      onRequestClose={()=>{setisOpen(!open)}}
      className="your-modal-content"
      overlayClassName="your-modal-overlay"
    >
      <input type='text' className='character-search-bar' onChange={(e) => {setfilterval(e.target.val)  }}/> 

        {
            (cardElements)
          }
    </ReactModal> 
      </div>
    </div>
  )
}

export default Farm