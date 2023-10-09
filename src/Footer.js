import './Footer.css';
import location from './images/location_icon.png'
import tel from './images/contact_mobile.png'
import email from './images/email_icon.png'

export function Footer() {
    return (
        <div className='footer_container'>
            <div className='contacts'  >
                
                    <div className='single_contact'  > {/* first contact */}
                        <div className='for_icon' >
                            <img className='location_icon' src={location} alt='location icon' />
                        </div>
                        <div className='location_text'>
                            <h2>Address</h2>
                            <h3>Ana Politkovskaia str.51</h3>
                        </div>
                    </div>

                    <div className='single_contact'  > {/* second  contact*/}
                        <div className='for_icon' >
                            <img className='location_icon' src={tel} alt='location icon' />
                        </div>
                        <div className='location_text'>
                            <h2>Tel:</h2>
                            <h3>+ 995 591 011 601</h3>
                        </div>
                    </div>

                    <div className='single_contact'  > {/* third contact */}
                        <div className='for_icon' >
                            <img className='location_icon' src={email} alt='location icon' />
                        </div>
                        <div className='location_text'>
                            <h2>E-mail:</h2>
                            <h3>info@elside.ge</h3>
                        </div>
                    </div>

            </div>

            <h3 className='reserved'>Copyright © 2021 All rights reserved.</h3>
        </div>
    );
}
