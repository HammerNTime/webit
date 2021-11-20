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
	tool,
	setTool,
	targetId,
	setTargetId,
}) {
	const params = useParams()
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
			"#18283b",
			"transparent",
			" #0075ff",
			"transparent",
			"transparent",
			"transparent",
			"transparent",
			"#18283b",
			"transparent",
			"transparent",
			"white",
			"transparent",
			"transparent",
			"white",
			"transparent",
			"transparent",
			"white",
			"transparent",
			// 19
			"transparent",
			"white",
			"transparent",
			"transparent",
			// 23
			"transparent",
			"white",
			"white",
		])
		setTextColors([
			"black",
			"white",
			"white",
			"white",
			"white",
			"white",
			"white",
			"white",
			"white",
			"white",
			"black",
			"black",
			"#c2c203",
			"black",
			"black",
			"#c2c203",
			"black",
			"#c2c203",
			"#c2c203",
			// 19
			"black",
			"black",
			"yellow",
			"black",
			// 23
			"black",
			"black",
			"black",
			"black",
			"gray",
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
		setTargetId(targetId * -1)
		console.log(e.target.id)
		if (e.target.id === "100" || e.target.id === "28") {
			return
		} else {
			console.log(e.target.style)
			if (tool === -1) {
				console.log(backgrounds)
				if (e.target.id === "12") {
					document.getElementById("11").style.backgroundColor = pickedColor
					backgrounds["11"] = pickedColor
					setBackgrounds(backgrounds)
					return
				}
				if (e.target.id === "15") {
					document.getElementById("14").style.backgroundColor = pickedColor
					backgrounds[14] = pickedColor
					setBackgrounds(backgrounds)
					return
				}
				if (e.target.id === "18") {
					document.getElementById("17").style.backgroundColor = pickedColor
					backgrounds[17] = pickedColor
					setBackgrounds(backgrounds)
					return
				}
				if (e.target.id === "21") {
					document.getElementById("20").style.backgroundColor = pickedColor
					backgrounds[20] = pickedColor
					setBackgrounds(backgrounds)
					return
				}
				if (e.target.id === "" || !e.target.id) {
					document.getElementById("0").style.backgroundColor = pickedColor
					backgrounds[0] = pickedColor
					if (e.target.id || e.target.id !== ""){
						backgrounds[e.target.id] = pickedColor
					}
					setBackgrounds(backgrounds)
					return
				}
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
					className={mainStyles.full_site_container}
					onClick={(e) => changeColor(pickedColor, e)}
				>
					<div className={mainStyles.main_site} id="0">
						<nav
							className={mainStyles.nav}
							id="1"
							style={{ color: textColors[1], backgroundColor: backgrounds[1] }}
						>
							<div
								id="2"
								style={{
									color: textColors[2],
									backgroundColor: backgrounds[2],
								}}
								className={mainStyles.logo}
							>
								Logo
							</div>

							<ul>
								<li>
									<a
										href="#"
										className={mainStyles.active}
										id="3"
										style={{
											color: textColors[3],
											backgroundColor: backgrounds[3],
										}}
									>
										Link
									</a>
								</li>
								<li>
									<a
										href="#"
										id="4"
										style={{
											color: textColors[4],
											backgroundColor: backgrounds[4],
										}}
									>
										Link2
									</a>
								</li>
								<li>
									<a
										href="#"
										id="5"
										style={{
											color: textColors[5],
											backgroundColor: backgrounds[5],
										}}
									>
										Link3
									</a>
								</li>
								<li>
									<a
										href="#"
										id="6"
										style={{
											color: textColors[6],
											backgroundColor: backgrounds[6],
										}}
									>
										Link4
									</a>
								</li>
								<li>
									<a
										href="#"
										id="7"
										style={{
											color: textColors[7],
											backgroundColor: backgrounds[7],
										}}
									>
										Link5
									</a>
								</li>
							</ul>
						</nav>
						<header
							className={mainStyles.wrapper}
							id="8"
							style={{ backgroundColor: backgrounds[8], color: textColors[8] }}
						>
							<h3
								id="9"
								style={{
									backgroundColor: backgrounds[9],
									color: textColors[9],
								}}
							>
								{" "}
								Banner Title Text Here{" "}
							</h3>
							<div
								className={mainStyles.header_container}
								id="10"
								style={{
									backgroundColor: backgrounds[10],
									color: textColors[10],
								}}
							>
								<div
									className={mainStyles.header_section}
									id="11"
									style={{
										backgroundColor: backgrounds[11],
										color: textColors[11],
									}}
								>
									{" "}
									<i
										class="fas fa-question-circle"
										id="12"
										style={{
											backgroundColor: backgrounds[12],
											color: textColors[12],
										}}
									></i>
									<h3
										id="13"
										style={{
											backgroundColor: backgrounds[13],
											color: textColors[13],
										}}
									>
										Some Text Here.
									</h3>
								</div>
								<div
									className={mainStyles.header_section}
									id="14"
									style={{
										backgroundColor: backgrounds[14],
										color: textColors[14],
									}}
								>
									{" "}
									<i
										class="fas fa-question-circle"
										id="15"
										style={{
											backgroundColor: backgrounds[15],
											color: textColors[15],
										}}
									></i>{" "}
									<h3
										id="16"
										style={{
											backgroundColor: backgrounds[16],
											color: textColors[16],
										}}
									>
										Some Text Here.
									</h3>
								</div>
								<div
									className={mainStyles.header_section}
									id="17"
									style={{
										backgroundColor: backgrounds[17],
										color: textColors[17],
									}}
								>
									{" "}
									<i
										class="fas fa-question-circle"
										id="18"
										style={{
											backgroundColor: backgrounds[18],
											color: textColors[18],
										}}
									></i>{" "}
									<h3
										id="19"
										style={{
											backgroundColor: backgrounds[19],
											color: textColors[19],
										}}
									>
										Some Text Here.
									</h3>
								</div>
								<div
									className={mainStyles.header_section}
									id="20"
									style={{
										backgroundColor: backgrounds[20],
										color: textColors[20],
									}}
								>
									{" "}
									<i
										class="fas fa-question-circle"
										id="21"
										style={{
											backgroundColor: backgrounds[21],
											color: textColors[21],
										}}
									></i>{" "}
									<h3
										id="22"
										style={{
											backgroundColor: backgrounds[22],
											color: textColors[22],
										}}
									>
										Some Text Here.
									</h3>{" "}
								</div>
							</div>
						</header>
						<main
							className={`${mainStyles.wrapper} ${mainStyles.section_wrapper}`} id="23" style={{backgroundColor: backgrounds[23], color: textColors[23]}}
						>
							<section
								className={mainStyles.section_left}
								id="24"
								style={{
									backgroundColor: backgrounds[24],
									color: textColors[24],
								}}
							></section>
							<section
								className={mainStyles.section_right}
								id="25"
								style={{
									backgroundColor: backgrounds[25],
									color: textColors[25],
								}}
							></section>
						</main>
						<footer style={{height: "130px"}}>
							<svg
								id="28"
								backgroundColor="blue"
								viewBox="0 -20 700 110"
								width="100%"
								height="150"
								preserveAspectRatio="none"
							>
								<path
									transform="translate(0, -20)"
									d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700"
									fill={targetId === -1 ? backgrounds[26] : backgrounds[26]}
									id="26"
								/>
								<path
									d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z"
									fill={targetId === -1 ? backgrounds[27] : backgrounds[27]}
									id="27"
								/>
							</svg>
						</footer>
					</div>
				</div>
			</div>
		</>
	)
}

export default Main
