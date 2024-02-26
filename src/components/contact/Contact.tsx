import Header from '../buy_now/Header';
import React, { useState, useEffect, FormEvent } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    async function postMsg() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    name: name,
                    subject: subject,
                    message: message,
                  }),
            });
        
            if (!response.ok) {
              throw new Error(`Erro de Rede: ${response.status}`);
            }
          }
          catch (error) {
            console.error('Erro ao buscar os dados:', error);
          }
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        console.log(name, subject, message);
        postMsg();
    }


    return (
        <div className={'container'}>
            <Header content={'Itens para compra:'} />
            
            <div className={'form-container'}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input 
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Your name"
                        onChange={(n) => setName(n.target.value)}
                        value={name}
                        required />
    
                    <label htmlFor="subject">Subject</label>
                    <input
                        id="subject"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        onChange={(s) => setSubject(s.target.value)}
                        value={subject}
                        required />
    
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Write something.."
                        style={{height: '570px'}}
                        onChange={(msg) => setMessage(msg.target.value)}
                        value={message}
                        required></textarea>

                    <input id="inputButton" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default Contact;

