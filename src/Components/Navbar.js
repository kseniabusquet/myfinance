import React from 'react';
import {  Link } from "react-router-dom";
import logo from '../assets/images/my-finance-logo.png';
import './Navbar.css';
import ThemeSwitcher from './ThemeSwitcher'


function Navbar(props){

    return (
        <div className = 'navbar'>
          <div className = 'logo'>
          <img className = 'image' src = {logo} alt = 'my finance logo'/>
          </div>
          <div className = 'container'>
            <Link to="/about">About</Link>
            <Link to="/community">Community</Link>
            <Link to="/support">Support</Link>
          
          <button className ='sign-up'>
            <Link to="/">Sign Up</Link>
          </button>
          
          <ThemeSwitcher changeTheme = {props.changeTheme}/>
          </div>
      </div>
      )
}

export default Navbar