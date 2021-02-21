import React, {useState, useEffect} from 'react'
import './Navbar.css'
import logo from '../components/beach.svg';

function Navbar() {

    const [Click, setClick] = useState(false);
    
    const handleClick = () => setClick(!Click);
    const closemobilemenu = () => setClick(false);
    
    
    return (
        
        <nav className='Navbar'>
            <div className='Navbar-container'>
                <img className='beach-logo' src={logo} alt='logo'/>                    
            <div className='menu-icon' onClick={handleClick}>
            <i className={Click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={ Click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>Restuaranter</li>
                <li className='nav-item'>Produkter</li>
                <li className='nav-item'>Nyhedsbrev</li>
                <li className='nav-item'>Kontakt</li>
                
            </ul>
            </div>
        </nav>
    )
}

export default Navbar