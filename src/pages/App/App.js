import React, { useState, useEffect } from "react"
import "./App.css"
import { Routes, Route } from "react-router-dom"

import { getUser, logout } from "../../services/authService"

import Nav from "../../components/Nav/Nav"
import Main from "../../components/Main"
import StyleModal from "../../components/styleModal"
import appStyles from "./appStyles.module.css"
import { SketchPicker } from "react-color"
import pickerStyles from "../../components/pickerStyles.module.css"
import rgbHex from "rgb-hex";
import Profile from "../profile/Profile"
import Profiles from "../profiles/profiles"

import SignUp from "../../pages/Auth/SignUp"
import SignIn from "../../pages/Auth/SignIn"
import { createTemplate } from "../../services/templateService"

function App() {
	const [currentUser, setCurrentUser] = useState()
	const [authenticated, setAuthenticated] = useState(false)
	// const [toggleFeed, setToggleFeed] = useState(true)
	const [color, setColor] = useState("#fff")
	const [backgrounds, setBackgrounds] = useState([])
	const [textColors, setTextColors] = useState([])


	const handleSignupOrLogin = async () => {
		const user = getUser()
		setCurrentUser(user)
		setAuthenticated(true)
	}
	useEffect(() => {
	}, [currentUser])

	const handleLogout = () => {
		logout()
		setCurrentUser(null)
		setAuthenticated(false)
		// setToggleFeed(true)
	}
	const saveTemplate = async (template) => {
		console.log(template)
		try {
			createTemplate(template)
		} catch (error) {
			throw error
		}
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
			<Nav handleLogout={handleLogout} currentUser={currentUser}/>
			<Routes>
				<Route
					exact
					path="/"
					element={
						<div className={appStyles.main__container}>
							<>
								<Main pickedColor={color} backgrounds={backgrounds} setBackgrounds={setBackgrounds} textColors={textColors} setTextColors={setTextColors} currentUser={currentUser} saveTemplate={saveTemplate} />
								<div className={pickerStyles.style__container}>
								<SketchPicker color={color} onChange={c =>
        setColor("#" + rgbHex(c.rgb.r, c.rgb.g, c.rgb.b, c.rgb.a))} />
									<StyleModal pickedColor={color} backgrounds={backgrounds} textColors={textColors} />
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
				<Route
					exact path="/profile"
					element={<Profile currentUser={currentUser} handleLogout={ handleLogout}/>}
				
				/>
				<Route
					exact path="/profiles"
					element={<Profiles currentUser={currentUser} handleLogout={ handleLogout}/>}
				
				/>
			</Routes>
		</div>
	)
}

export default App
