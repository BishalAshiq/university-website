import React from 'react';
import './About.css'
import logo from '../../images/MP-M-Alomgir.jpg'
const About = () => {
    return (
        <div className='about-container'>
            <img src={logo} alt=""/>
            <h2>European University Of Bangladesh</h2>
            <p>The European University of Bangladesh (ইউরোপিয়ান বিশ্ববিদ্যালয়) or EUB is a private university located at Dhaka, Bangladesh. The university was established in 2012 under the Private University Act, 1992. Dr. Mokbul Ahmed Khan is vice-chancellor of the University. The university was founded by Muhiuddin Khan Alamgir, former Home Minister and Bangladesh Awami League politician</p>
        </div>
    );
};

export default About;