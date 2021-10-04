import React from 'react';
import './Homecart.css'
const HomeCart = (props) => {
    const{name, img, educationLevel} =props.subject;
    return (
        <div className='home-cart'>
            <img src={img} alt=""/>
            <h2>{name}</h2>
            <h3>{educationLevel}</h3>
        </div>
    );
};

export default HomeCart;