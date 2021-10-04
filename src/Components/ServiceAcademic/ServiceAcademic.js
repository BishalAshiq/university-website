import React from 'react';
import './ServiceAcademy.css'
const ServiceAcademic = (props) => {
    const{img, name, educationLevel} = props.academic
    return (
        <div className='service-cart'>
            <img src={img} alt=""/>
            <h2>{name}</h2>
            <h3>{educationLevel}</h3>
        </div>
    );
};

export default ServiceAcademic;