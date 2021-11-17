import React, { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import "./App.css"
import { Routes, Navigate, useHistory } from "react-router-dom"

import { getUser, logout } from "../../services/authService"

import Nav from "../../components/Nav/Nav"
import Main from "../../components/Main"
import styleModule from "../../components/styleModal"
import appStyles from "./appStyles.module.css"
import { SketchPicker } from "react-color"
import pickerStyles from "../../components/pickerStyles.module.css"

import SignUp from "../../pages/Auth/SignUp"
import SignIn from "../../pages/Auth/SignIn"

function App() {
	const [currentUser, setCurrentUser] = useState()
	const [authenticated, setAuthenticated] = useState(false)
	const [toggleFeed, setToggleFeed] = useState(true)
	const [ color, setColor] = useState("#fff")
    const [modalIsOpen, setModalIsOpen] = useState(false)

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
			<Nav handleLogout={handleLogout} />
			<Routes>
				<Route
					exact
					path="/"
					element={
						<div className={appStyles.main__container}>
							<>
								<Main pickedColor={color}/>
								<div className={pickerStyles.style__container}>
								<SketchPicker color={color} onChange={updatedColor => setColor(updatedColor.hex)} />
									<styleModule pickedColor={color}/>
							</div>
							</>
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
