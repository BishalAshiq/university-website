import React from 'react';
import './Contact.css'
import logo from '../../images/faq.png'
import { Accordion } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
const Contact = () => {
    return (
    <div>
        <h1>Wanted to know Any kind Of Quetion About the University</h1>
        <div className='ask-que'>
            <div>
                <img src={logo} alt=""/>
            </div>
            <div className='que'>
        <Accordion defaultActiveKey="0">
            <Accordion.Item>
                <Accordion.Header>What are the most important things should I get admission?</Accordion.Header>
                <Accordion.Body>
                Like if you wish to use cycle for office commute you choose road cycles which suits for plain roads, pavements most of the leveled surface. Or if you like adventure climbing mountains or off road drive mountain cycles will be apt.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item>
                <Accordion.Header>Would you prefer me which department i should choose in thease university?</Accordion.Header>
                <Accordion.Body>
                Typically, you know if the helmet took a good hit, because a good hit to the helmet is a good hit to the head,” Parks says. “Just even the sound of the impact or the way your head felt—like if you hit hard enough to see stars—can tell you if the helmet should be replaced.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
            </div>
        </div>
<br/> 
<br/>
        <div className='subscribe'>
           <h1>Stay In Touch</h1>
            <p>Come Join us and Get World-class Education</p>
            <input type="text" placeholder="Your Email"/>
            <br/>
            <Button>Submit</Button>
        </div>
    </div>
    );
};

export default Contact;