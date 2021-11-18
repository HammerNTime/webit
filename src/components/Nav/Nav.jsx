import React from "react"
import { Link } from "react-router-dom"
import "./Nav.css"

// Assets
import LogoDesktop from "../../assets/logo/logo-desktop.png"

const Nav = (props) => {
	console.log(props)

	return (
		<nav className="nav-bar">
			<div className="navbar__container">
				<Link className="logo" to="/">
					<span>
						<i className="fas fa-fill-drip "></i>{" "}
						<span className="logo-color">W</span>ebit
					</span>
				</Link>

				{props.currentUser ? (
					<div className="auth-container-signed_in">
						<div>
							<Link to="/profile">
								<img id="avatar" src={props.currentUser.avatar} alt="" />
							</Link>
						</div>
						<div>
							<i
								className="fas fa-sign-out-alt"
								onClick={(e) => props.handleLogout()}
							></i>
						</div>
					</div>
				) : (
					<div className="auth-container">
						<Link to="/signup">Sign Up</Link>
						<Link to="/signin">Sign In</Link>
					</div>
				)}
			</div>
		</nav>
	)
}

export default Nav
