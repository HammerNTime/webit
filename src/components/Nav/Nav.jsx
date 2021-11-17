import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

// Assets
import LogoDesktop from '../../assets/logo/logo-desktop.png'


const Nav = (props) => {


    return (
        <nav className="nav-bar">
            <div className="navbar__container">

          

                <Link className="logo" to="/home">
                    <span><i className="fas fa-fill-drip "></i> <span className="logo-color">W</span>ebit</span>
            </Link>
            <div className="auth-container">
                
            <Link to="/signup">Sign Up</Link>
                <Link to="/signin">Sign In</Link>
                <div><i className="fas fa-sign-out-alt"></i></div>
            {/* <button onClick={(e) => props.handleLogout()}>Logout</button> */}
                    </div>
                    </div>
        </nav>
    )
}

export default Nav