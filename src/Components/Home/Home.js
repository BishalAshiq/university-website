import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import HomeCart from '../HomeCart/HomeCart';
import './Home.css'

const Home = () => {
    const[subjects, setSubjects] = useState([]);
    useEffect( ()=>{
        fetch('./tools.JSON')
        .then(res => res.json())
        .then(data => setSubjects(data))
    } ,[])
    return (
        <div className='Home-container'>
            <h1>EUROPEAN UNIVERSITY OF BANGLADESH</h1>
            <p>European University of Bangladesh (EUB) is a private university aiming at providing modern education of European standards in Bangladesh. It has been accredited by the Government of the People's Republic of Bangladesh, curricula and academic while its programs have been approved by the University Grants Commission (UGC). It was established under the Private University Act 2010 with the approval of the Government of Bangladesh on 14 March 2012 for awarding degrees in various fields. The President of the People's Republic of Bangladesh is the chancellor of European University of Bangladesh. They also have a stablished cultural theater. which is called by EUB Theater. They are organizing and participating in stage drama at Shilpakala Academy. and also making video fiction too.</p>
            <br/> <br/>
            <h1>Faculties</h1>
            <div className='subjects'>
                 
              {
                  subjects.map(subject => <HomeCart
                                key ={subject.id}
                                subject={subject}
                                ></HomeCart>)
              }
            </div>

        </div>
    );
};

export default Home;