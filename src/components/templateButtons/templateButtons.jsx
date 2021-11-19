import React from "react"
import styles from "./templateButtons.module.css"

function TemplateButtons({
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
}) {
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

	const resetTemplate = () => {
		window.location.reload(false)
	}
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
		<div>
			<button className={tool === -1 ? styles.background : styles.text}
				onClick={() => {
					setTool(tool * -1)
				}}
			>
				{tool === -1 ? "Color Text" : "Color Background"}
			</button>
			<button onClick={() => resetTemplate()}>Reset</button>
			{currentUser ? (
				<form onSubmit={handleSubmit}>
					<div>
					<input type="text" name="title" placeholder="Template Name" />

					</div>
					<button type="submit">Save Template</button>
				</form>
			) : (
				""
			)}
		</div>
	)
}

export default TemplateButtons
