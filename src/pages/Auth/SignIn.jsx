import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Auth.css'

// Assets
import design from "../../assets/animation/design.json"


// Services
import { login } from '../../services/authService' // update import

// Components
import Animation from '../../components/misc/Animation'

const SignIn = (props) => {
    let history = useNavigate()
    const [authError, setAuthError] = useState(false)
    const [formData, setFormData] = useState({
        // remove handle, and avatar from formData
        email: '',
        password: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await login(formData) // replaced signup with login
            props.handleSignupOrLogin()
            history('/')
        } catch (error) {
            setAuthError(error.message)
            setFormData({
                // updated our form reset
                email: '',
                password: '',
            })
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="signup-page">
            <div className='left-container'>

                <div className='form-container'>
                    <div className="title-container">
                        <h1>Login</h1>
                        {authError ?
                            <h3>{authError}</h3>
                            :
                            <h3>Please enter your login information</h3>
                        }
                    </div>

                    <form className="register-form" onSubmit={handleSubmit}>
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
                            required name="password"
                            type="password"
                            placeholder="Password"
                        />
                        <button 
                            autoComplete="off" 
                            id="submit-button"
                            type="submit"
                        >
                            SIGN IN
                        </button>
                    </form>

                    <div className="redirect-container">
                        <p>Need an account?</p>
                        <Link className="redirect-link" to="/signup">
                            <p>Sign Up</p>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="right-container">
                <div className="lottie">

                <Animation animData={design}/>
                </div>
            </div>

        </div>
    )
}

export default SignIn