import React from 'react';
import './Footer.css'
import logo1 from '../../images/Icon_1.png';
import logo2 from '../../images/Icon_2.png'
const Footer = () => {
    return (
        <div className='footer-container'>
            <div>
                <a href='/fethure'>Fethures</a>
                <a href='/help'>Help</a>
                <a href='/pricvecy'>Privecy</a>
                <br/>
                <p>2021, All right reserved By Ashiqul Islam</p>
            </div>
            <div>
                <img src={logo1} alt=""/>
                <br/>
                <img src={logo2} alt=""/>
            </div>
        </div>
    );
};

export default Footer;