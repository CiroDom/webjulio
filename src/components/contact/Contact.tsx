import Header from '../buy_now/Header';

function Contact() {
    return (
        <div className={'container'}>
            <Header content={'Itens para compra:'} />
            
            <div className={'form-container'}>
                <form>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" name="name" placeholder="Your name" required />
    
                    <label htmlFor="subject">Subject</label>
                    <input id="subject" type="text" name="subject" placeholder="Subject" required />
    
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Write something.." style={{ height: '570px' }} required></textarea>

                    <input id="inputButton" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default Contact;

