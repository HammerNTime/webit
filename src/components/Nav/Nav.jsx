import React from "react"
import { Link } from "react-router-dom"
import "./Nav.css"

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
						<Link to="/profiles">Profiles</Link>
						<Link to="/Design">Design</Link>
						<div>
							<Link to="/profile">
								<img id="avatar" src={props.currentUser.avatar} alt="" />
							</Link>
						</div>
						<div>
							<Link to="/">
								<i
									className="fas fa-sign-out-alt fa-lg"
									onClick={(e) => props.handleLogout()}
								></i>
							</Link>
						</div>
					</div>
				) : (
					<div className="auth-container">
						<Link to="/profiles">Profiles</Link>
						<Link to="/Design">Design</Link>
						<Link to="/signup">Sign Up</Link>
						<Link to="/signin">Sign In</Link>
					</div>
				)}
			</div>
		</nav>
	)
}

export default Nav
