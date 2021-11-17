import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

// Assets
import LogoDesktop from '../../assets/logo/logo-desktop.png'


const Nav = (props) => {


    return (
        <nav className="nav-bar">

            <Link className="logo" to="/home">
                <img src={LogoDesktop} alt="diso-logo"></img>
            </Link>

            <Link to="/signup">Sign Up</Link>

            <Link to="/signin">Sign In</Link>
            <button onClick={(e) => props.handleLogout()}>Logout</button>
        </nav>
    )
}

export default Nav