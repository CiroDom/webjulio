import Header from '../buy_now/Header';
import React, { useState, useEffect } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');


    return (
        <div className={'container'}>
            <Header content={'Itens para compra:'} />
            
            <div className={'form-container'}>
                <form>
                    <label htmlFor="name">Name</label>
                    <input 
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Your name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required />
    
                    <label htmlFor="subject">Subject</label>
                    <input
                        id="subject"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        onChange={(e) => setSubject(e.target.value)}
                        value={subject}
                        required />
    
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Write something.."
                        style={{height: '570px'}}
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        required></textarea>

                    <input id="inputButton" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default Contact;

