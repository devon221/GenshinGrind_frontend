import {React} from 'react'; 
import { Route, Routes } from "react-router-dom";
import './App.css';
import Login from './shared/pages/Login';
import Home from './shared/pages/Home';
import Signup from './shared/pages/Signup';
import Footer from './shared/components/Footer';
import Header from './shared/components/Header';
import Weapon from './shared/pages/Weapon';
import Farm from './shared/pages/Farm';
function App() {
  return (
    <>
    <Header/>
     <Routes> 
      <Route path='/' Component={Login}></Route>
      <Route path='/Signup' Component={Signup}></Route>
      <Route path='/Home' Component={Home}></Route>
      <Route path='/Farming' Component={Farm}></Route>
      <Route path='/Weapons' Component={Weapon}></Route>
    </Routes>
    <Footer/> 
    </>
   
    
  );
}

export default App;
