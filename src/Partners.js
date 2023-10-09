import './Partners.css'
import kohler from './images/koshler.png'
import efecta from './images/efecta.png'
import nexans from './images/nexans.jpg'


export function Partners() {
    return (
        <div className='partner_container'>
            <div className='partner_little_cont' >
                <div className='little_partner' >
                    <h2 className='partners_h2'>P a r t n e r s</h2>
                </div>
                <div className='all_partners'>
                    <div className='white'>
                        <img src={kohler} alt='company icon' className='partner_icons' />
                    </div>
                    
                    <div className='white'  >
                        <img src={efecta} alt='company icon' className='partner_icons' />
                    </div>
                    
                    <div className='white' >
                        <img src={nexans} alt='company icon' className='partner_icons' />
                    </div>
                </div>
            </div>
        </div>
    )
}