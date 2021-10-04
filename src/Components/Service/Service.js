import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceAcademic from '../ServiceAcademic/ServiceAcademic';
import './Service.css'
const Service = () => {
    const [academics, setAcademics] = useState([]);
    useEffect( ()=> {
        fetch('./toolsBase.JSON')
        .then(res => res.json())
        .then(data => setAcademics(data))
    } ,[])
    return (
        <div className='service'>
            <h2>Service Fact:{academics.length}</h2>
            {
                academics.map(academic => <ServiceAcademic
                                          key={academic.id}
                                          academic={academic}
                                            ></ServiceAcademic>)
            }
        </div>
    );
};

export default Service;