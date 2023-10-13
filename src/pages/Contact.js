import './Contact.css'



export default function Contact() {
    return (
        <div className='contact_container'>
            <div className="contact" >
                <h1 className="contact_h1" >მ ი ს ა მ ა რ თ ი</h1>
            </div>
            
            <div className="google-map">
                <iframe 
                    title='location'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509603!2d144.95592831550472!3d-37.817209979751745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218cce7e9!2sVictoria%20State%20Library!5e0!3m2!1sen!2sau!4v1602743964168!5m2!1sen!2sau" 
                    width="600" 
                    height="450" 
                    frameborder="0" 
                    className='google_window'
                    allowfullscreen="" 
                    aria-hidden="false" 
                    tabindex="0">
                </iframe>
            </div>
        </div>
    );
}
