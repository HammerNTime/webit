import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import "./Auth.css"

// Assets
import cat from "../../assets/avatars/cat.png"
import design from "../../assets/animation/design.json"
import signupLottie from "../../assets/animation/signupLottie.json"

// Services
import { signup } from "../../services/authService"

// Components
import AvatarSelection from "./AvatarSelection/AvatarSelection"
import Animation from "../../components/misc/Animation"

const SignUp = (props) => {
	const [popup, setPopup] = useState(false)
	const history = useNavigate()
	const [authError, setAuthError] = useState(false)
	const [formData, setFormData] = useState({
		handle: "",
		email: "",
		password: "",
		avatar: cat,
	})

	const handlePopup = () => {
		setPopup(!popup)
	}

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			await signup(formData)
			props.handleSignupOrLogin()
			history("/")
		} catch (error) {
			setAuthError(error.message)
			setFormData({
				handle: "",
				email: "",
				password: "",
				avatar: cat,
			})
		}
	}

	return (
		<div className="signup-page">
			{popup && (
				<AvatarSelection
					formData={formData}
					handleChange={handleChange}
					handlePopup={handlePopup}
				/>
			)}

			<div className="left-container">
				<div className="form-container">
					<div className="title-container">
						<h1>Create an Account</h1>
						{authError ? <h3>{authError}</h3> : <h3>Color your website!</h3>}
					</div>
					<form className="register-form" onSubmit={handleSubmit}>
						<input
							onChange={handleChange}
							value={formData.handle}
							autoComplete="off"
							required
							name="handle"
							type="text"
							placeholder="Username"
						/>
						<input
							onChange={handleChange}
							value={formData.email}
							autoComplete="off"
							required
							name="email"
							type="email"
							placeholder="Email"
						/>

						<input
							onChange={handleChange}
							value={formData.password}
							autoComplete="off"
							required
							name="password"
							type="password"
							placeholder="Password"
						/>

						<button id="avatar-button" type="button" onClick={handlePopup}>
							Select Avatar
						</button>

						<button id="submit-button" type="submit">
							SIGN UP
						</button>
					</form>

					<div className="redirect-container">
						<p>Already have an account?</p>
						<Link className="redirect-link" to="/signin">
							<p>Sign In</p>
						</Link>
					</div>
				</div>
			</div>

			<div className="right-container">
				<div className="lottie">
					<Animation animData={signupLottie} animWidth={100} animHeight={100} />
				</div>
			</div>
		</div>
	)
}

export default SignUp
