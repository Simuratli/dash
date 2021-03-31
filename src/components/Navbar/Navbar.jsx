import React from 'react';
import './Navbar.css'
import Logo from '../../assets/img/logo.png'
import  {NavLink } from "react-router-dom"
 
function Navbar() {
    return (
        <header className='navbar'>
            <img className='logo' src={Logo} />
            <div className='navbar-content'>
                <NavLink exact to='/'>Music</NavLink>
                <NavLink exact to='/musician'>Musician</NavLink>
                {/* <Link to='/login'>Login</Link> */}
            </div>
        </header>
    )
}

export default Navbar
