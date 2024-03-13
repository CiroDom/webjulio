import { postMsg } from '../../requests/requests';
import Header from '../buy_now/Header';
import { useState, FormEvent } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        console.log(name, subject, message);
        postMsg(name, subject, message);
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

