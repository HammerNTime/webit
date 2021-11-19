import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getTemplateById } from "../services/templateService"
import mainStyles from "./mainStyles.module.css"

function Main({
	pickedColor,
	setCurrentTemplate,
	currentTemplate,
	backgrounds,
	setBackgrounds,
	textColors,
	setTextColors,
	saveTemplate,
	currentUser,
}) {
	const params = useParams()
	const [tool, setTool] = useState(-1)
	const handleSubmit = (e) => {
		e.preventDefault()
		const templateData = {
			template_title: e.target.title.value,
			backgroundColors: backgrounds,
			textColors: textColors,
			added_by: currentUser._id,
		}
		saveTemplate(templateData)
	}
	const getTemplate = async () => {
		let template = await getTemplateById(params?.id)
		console.log(template)
		setCurrentTemplate(template)
	}
	useEffect(() => {
		if (params?.id) {
			getTemplate()
		}
	}, [params.id])
	const resetTemplate = () => {
		window.location.reload(false)
	}
	const initTemplate = () => {
		// window.location.reload(false)
		setBackgrounds([
			"white",
			"silver",
			"lightgreen",
			"lightyellow",
			"lightgreen",
			"lightyellow",
			"lightgreen",
			"purple",
			"white",
			"black",
			"pink",
			"silver",
			"blue",
			"silver",
			"blue",
			"silver",
			"gray",
			"green",
			"yellow",
			"red",
		])
		setTextColors([
			"black",
			"black",
			"black",
			"black",
			"black",
			"black",
			"black",
			"black",
			"black",
			"white",
			"black",
			"black",
			"black",
			"black",
			"black",
			"black",
			"black",
			"black",
			"black",
		])
	}
	useEffect(() => {
		if (currentTemplate) {
			setBackgrounds(currentTemplate?.backgroundColors)
			setTextColors(currentTemplate?.textColors)
		} else {
			initTemplate()
		}
	}, [currentTemplate])
	function changeColor(pickedColor, e) {
		if (e.target.id === "100") {
			return
		} else {
			if (tool === -1) {
				backgrounds[e.target.id] = pickedColor
				setBackgrounds(backgrounds)
				e.target.style.backgroundColor = pickedColor
			} else {
				textColors[e.target.id] = pickedColor
				setTextColors(textColors)
				e.target.style.color = pickedColor
			}
		}
	}

	return (
		<>
			<div>
				{currentTemplate ? <div>{currentTemplate.template_title}</div> : ""}
				<div
					id="0"
					style={{ backgroundColor: backgrounds[0] }}
					className={mainStyles.site__container}
					onClick={(e) => changeColor(pickedColor, e)}
				>
					<header
						id="1"
						style={{ color: textColors[1], backgroundColor: backgrounds[1] }}
					>
						<div
							id="2"
							className={mainStyles.logo}
							style={{ color: textColors[2], backgroundColor: backgrounds[2] }}
						>
							Logo
						</div>
						<nav id="100">
							<ul
								id="100"
								className={mainStyles.nav__links}
								style={{ backgroundColor: "transparent" }}
							>
								<li
									id="3"
									style={{
										color: textColors[3],
										backgroundColor: backgrounds[3],
									}}
								>
									Home
								</li>
								<li
									id="4"
									style={{
										color: textColors[4],
										backgroundColor: backgrounds[4],
									}}
								>
									Pages
								</li>
								<li
									id="5"
									style={{
										color: textColors[5],
										backgroundColor: backgrounds[5],
									}}
								>
									About Us
								</li>
							</ul>
						</nav>
						<a id="6">
							<button
								id="6"
								className={mainStyles.nav__button}
								style={{
									color: textColors[6],
									backgroundColor: backgrounds[6],
								}}
							>
								Contact
							</button>
						</a>
					</header>
					<section
						id="7"
						className={mainStyles.search__container}
						style={{ backgroundColor: backgrounds[7] }}
					>
						<input
							id="8"
							type="text"
							className={mainStyles.search__input}
							style={{ color: textColors[8], backgroundColor: backgrounds[8] }}
							placeholder="Lorem Ipsum"
						/>

						<button
							id="9"
							type="submit"
							className={mainStyles.search__button}
							style={{ backgroundColor: backgrounds[9], color: textColors[9] }}
						>
							Search
						</button>
					</section>
					<section
						id="10"
						className={mainStyles.extra__links}
						style={{ backgroundColor: backgrounds[10] }}
					>
						<div
							id="11"
							className={mainStyles.extra__link_item}
							style={{ backgroundColor: backgrounds[11] }}
						>
							<p id="11" style={{ backgroundColor: backgrounds[11] }}>
								HI
							</p>
						</div>
						<div
							id="12"
							className={mainStyles.extra__link_item}
							style={{ backgroundColor: backgrounds[12] }}
						>
							<p id="12" style={{ backgroundColor: backgrounds[12] }}>
								HI
							</p>
						</div>
						<div
							id="13"
							className={mainStyles.extra__link_item}
							style={{ backgroundColor: backgrounds[13] }}
						>
							<p id="13" style={{ backgroundColor: backgrounds[13] }}>
								HI
							</p>
						</div>
						<div
							id="14"
							className={mainStyles.extra__link_item}
							style={{ backgroundColor: backgrounds[14] }}
						>
							<p id="14" style={{ backgroundColor: backgrounds[14] }}>
								HI
							</p>
						</div>
						<div
							id="15"
							className={mainStyles.extra__link_item}
							style={{ backgroundColor: backgrounds[15] }}
						>
							<p id="15" style={{ backgroundColor: backgrounds[15] }}>
								HI
							</p>
						</div>
					</section>
					<section id="100" className={mainStyles.main__container}>
						<div
							id="16"
							className={mainStyles.left__side}
							style={{ backgroundColor: backgrounds[16] }}
						></div>
						<div id="100" className={mainStyles.right__side}>
							<div
								id="17"
								className={mainStyles.right__info1}
								style={{ backgroundColor: backgrounds[17] }}
							></div>
							<div
								id="18"
								className={mainStyles.right__info2}
								style={{ backgroundColor: backgrounds[18] }}
							></div>
						</div>
					</section>
					<footer id="19" style={{ backgroundColor: backgrounds[19] }}>
						Hi, I am the footer
					</footer>
				</div>
				<div>
					<button
						onClick={() => {
							setTool(tool * -1)
						}}
					>
						{tool === -1 ? "Color Text" : "Color Background"}
					</button>
					<button onClick={() => resetTemplate()}>Reset</button>
					{currentUser ? (
						<form onSubmit={handleSubmit}>
							<input type="text" name="title" placeholder="Template Name" />
							<button type="submit">Save Template</button>
						</form>
					) : (
						""
					)}
				</div>
			</div>
		</>
	)
}

export default Main
