import './Header.css'


export function Header() {
    return (
        <header className='header'>
            <img src='./company_logo.png' alt='elside company logo' className='logo' />
            <div class="container">
                <div className="btn"><a href="one">HOME</a></div>
                <div className="btn"><a href="two" >Company</a></div>
                <div className="btn"><a href="three" >Services</a></div>
                <div className="btn"><a href="four" >Projects</a></div>
                <div className="btn"><a href="five" >Contact</a></div>
	        </div>
        </header>
    )
}