import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar(){
    return (
        <>
        <nav className='navbar'>
            <Link to='/' className='navbar-logo'>
                EPIC
            </Link>
        </nav>
        </>
    )
}

export default Navbar
