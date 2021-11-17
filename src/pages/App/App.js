import React, { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import "./App.css"
import { Routes, Navigate, useHistory } from "react-router-dom"

import { getUser, logout } from "../../services/authService"

import Nav from "../../components/Nav/Nav"
import Main from "../../components/Main"
import ColorPicker from "../../components/ColorPicker"
import appStyles from "./appStyles.module.css"

import SignUp from "../../pages/Auth/SignUp"
import SignIn from "../../pages/Auth/SignIn"

function App() {
	const [currentUser, setCurrentUser] = useState()
	const [authenticated, setAuthenticated] = useState(false)
	const [toggleFeed, setToggleFeed] = useState(true)

	const handleSignupOrLogin = async () => {
		const user = getUser()
		setCurrentUser(user)
		setAuthenticated(true)
	}
	useEffect(() => {
		console.log(currentUser)
	}, [currentUser])

	const handleLogout = () => {
		logout()
		setCurrentUser(null)
		setAuthenticated(false)
		setToggleFeed(true)
	}

	useEffect(() => {
		const verifyToken = async () => {
			const token = localStorage.getItem("token")
			if (token) {
				try {
					const user = getUser()
					setCurrentUser(user)
					setAuthenticated(true)
				} catch (error) {
					localStorage.clear()
				}
			}
		}
		verifyToken()
	}, [authenticated])

	return (
		<div className="App">
			&lt;p&gt;working&lt;/p&gt;
			<Nav handleLogout={handleLogout} />
			<Routes>
				<Route
					exact
					path="/"
					element={
						<div className={appStyles.main__container}>
							<Main />
							<ColorPicker />
						</div>
					}
				/>
				<Route
					exact
					path="/signin"
					element={<SignIn handleSignupOrLogin={handleSignupOrLogin} />}
				/>

				<Route
					exact
					path="/signup"
					element={<SignUp handleSignupOrLogin={handleSignupOrLogin} />}
				/>
			</Routes>
		</div>
	)
}

export default App
