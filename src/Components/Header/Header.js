import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-eub.png'
const Header = () => {
    return (
        <div className='header-container'>
            <div className='image'>
            <img src={logo} alt =""/>
            </div>
            
            <div className='nav'>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/service">Service</Link>
            <Link to="/contact">Contact</Link>
            </div>
        </div>
    );
};

export default Header;