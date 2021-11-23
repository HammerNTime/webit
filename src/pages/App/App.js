import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import rgbHex from "rgb-hex"
import { SketchPicker } from "react-color"

//Styles
import "./App.css"
import appStyles from "./appStyles.module.css"

//Components
import Nav from "../../components/Nav/Nav"
import Main from "../../components/Main"
import StyleModal from "../../components/styleModal"
import pickerStyles from "../../components/pickerStyles.module.css"
import { Snackbar } from "../../components/misc/snackbar/snackbar"
import { useSnackbar } from "../../components/misc/snackbar/useSnackbar"

//pages
import Profile from "../profile/Profile"
import Profiles from "../profiles/profiles"
import User from "../User/User"
import SignUp from "../../pages/Auth/SignUp"
import SignIn from "../../pages/Auth/SignIn"
import Landing from "../home/Landing"

//Services
import { getUser, logout } from "../../services/authService"
import { createTemplate } from "../../services/templateService"
import TemplateButtons from "../../components/templateButtons/templateButtons"

function App() {
	const [currentUser, setCurrentUser] = useState()
	const [authenticated, setAuthenticated] = useState(false)
	const [color, setColor] = useState("#fff")
	const [backgrounds, setBackgrounds] = useState([])
	const [textColors, setTextColors] = useState([])
	const [currentTemplate, setCurrentTemplate] = useState()
	const [tool, setTool] = useState(-1)
	const [targetId, setTargetId] = useState(-1)

	const { isActive, message, openSnackBar } = useSnackbar()
	const showSnackbarHandler = (text) => {
		openSnackBar(text)
	}

	const handleSignupOrLogin = async () => {
		const user = getUser()
		setCurrentUser(user)
		setAuthenticated(true)
	}
	useEffect(() => {}, [currentUser])

	const handleLogout = () => {
		logout()
		setCurrentUser(null)
		setAuthenticated(false)
	}
	
	const saveTemplate = async (template) => {
		if (!currentUser) return
		try {
			showSnackbarHandler("Template Saved")
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
			<Nav handleLogout={handleLogout} currentUser={currentUser} />
			<Routes>
				<Route
					exact
					path="/design"
					element={
						<div className={appStyles.main__container}>
							<>
								<Main
									pickedColor={color}
									backgrounds={backgrounds}
									setBackgrounds={setBackgrounds}
									textColors={textColors}
									setTextColors={setTextColors}
									currentUser={currentUser}
									saveTemplate={saveTemplate}
									tool={tool}
									setTool={setTool}
									targetId={targetId}
									setTargetId={setTargetId}
								/>
								<div className={appStyles.pickerStyle__container}>
									<SketchPicker
										color={color}
										onChange={(c) =>
											setColor("#" + rgbHex(c.rgb.r, c.rgb.g, c.rgb.b, c.rgb.a))
										}
									/>
									<div>
										<TemplateButtons
											pickedColor={color}
											backgrounds={backgrounds}
											setBackgrounds={setBackgrounds}
											textColors={textColors}
											setTextColors={setTextColors}
											currentUser={currentUser}
											saveTemplate={saveTemplate}
											currentTemplate={currentTemplate}
											setCurrentTemplate={setCurrentTemplate}
											tool={tool}
											setTool={setTool}
										/>
									</div>
									<StyleModal
										pickedColor={color}
										backgrounds={backgrounds}
										textColors={textColors}
										targetId={targetId}
										showSnackbarHandler={showSnackbarHandler}
									/>
								</div>
								<Snackbar isActive={isActive} message={message} />
							</>
						</div>
					}
				/>
				<Route
					exact
					path="/signin"
					element={<SignIn handleSignupOrLogin={handleSignupOrLogin} />}
				/>
				<Route exact path="/" element={<Landing />} />
				<Route
					exact
					path="/signup"
					element={<SignUp handleSignupOrLogin={handleSignupOrLogin} />}
				/>
				<Route
					exact
					path="/profile"
					element={
						<Profile
							currentUser={currentUser}
							handleLogout={handleLogout}
							setCurrentUser={setCurrentUser}
						/>
					}
				/>
				<Route
					exact
					path="/profiles"
					element={
						<Profiles currentUser={currentUser} handleLogout={handleLogout} />
					}
				/>
				<Route
					exact
					path="/profiles/:id"
					element={<User currentUser={currentUser} />}
				/>
				<Route
					exact
					path="/templates/:id"
					element={
						<div className={appStyles.main__container}>
							<>
								<Main
									pickedColor={color}
									backgrounds={backgrounds}
									setBackgrounds={setBackgrounds}
									textColors={textColors}
									setTextColors={setTextColors}
									currentUser={currentUser}
									saveTemplate={saveTemplate}
									currentTemplate={currentTemplate}
									setCurrentTemplate={setCurrentTemplate}
									tool={tool}
									setTool={setTool}
									targetId={targetId}
									setTargetId={setTargetId}
								/>
								<div className={pickerStyles.style__container}>
									<SketchPicker
										color={color}
										onChange={(c) =>
											setColor("#" + rgbHex(c.rgb.r, c.rgb.g, c.rgb.b, c.rgb.a))
										}
									/>
									<div>
										<TemplateButtons
											pickedColor={color}
											backgrounds={backgrounds}
											setBackgrounds={setBackgrounds}
											textColors={textColors}
											setTextColors={setTextColors}
											currentUser={currentUser}
											saveTemplate={saveTemplate}
											currentTemplate={currentTemplate}
											setCurrentTemplate={setCurrentTemplate}
											tool={tool}
											setTool={setTool}
										/>
									</div>
									<StyleModal
										pickedColor={color}
										backgrounds={backgrounds}
										textColors={textColors}
										targetId={targetId}
										showSnackbarHandler={showSnackbarHandler}
									/>
								</div>
								<Snackbar isActive={isActive} message={message} />
							</>
						</div>
					}
				/>
			</Routes>
		</div>
	)
}

export default App
