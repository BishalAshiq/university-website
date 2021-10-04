import React from 'react';
import './About.css'
import logo from '../../images/MP-M-Alomgir.jpg'
const About = () => {
    return (
        <div className='about-container'>
           
           <div>
           <img src={logo} alt=""/>
            <h3>MP, Mahiuddin Khan Alamgir</h3>
            <h4>Chairman</h4>
           </div>
            <br/>

            <div>
            <h2>European University Of Bangladesh</h2>
            <p>The European University of Bangladesh (ইউরোপিয়ান বিশ্ববিদ্যালয়) or EUB is a private university located at Dhaka, Bangladesh. The university was established in 2012 under the Private University Act, 1992. Dr. Mokbul Ahmed Khan is vice-chancellor of the University. The university was founded by Muhiuddin Khan Alamgir, former Home Minister and Bangladesh Awami League politician</p>
                <br/> <br/>
                <h3>History</h3>
                <p>European University of Bangladesh (EUB) is a private university aiming at providing modern education of European standards in Bangladesh. It has been accredited by the Government of the People's Republic of Bangladesh, curricula and academic while its programs have been approved by the University Grants Commission (UGC). It was established under the Private University Act 2010 with the approval of the Government of Bangladesh on 14 March 2012 for awarding degrees in various fields. The President of the People's Republic of Bangladesh is the chancellor of European University of Bangladesh. They also have a stablished cultural theater. which is called by EUB Theater. They are organizing and participating in stage drama at Shilpakala Academy. and also making video fiction too.</p>
                  <br/> <br/>
            </div>
        </div>
    );
};

export default About;