import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
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