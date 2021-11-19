import React from "react"
import Styles from "./templateButtonStyles.module.css"

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

		<div className={Styles.form_container}>
			<span
				className={Styles.current_action}
				onClick={() => {
					setTool(tool * -1)
				}}
			>
				{ tool === -1 ? " Click to edit text color" : "Click to edit background color"}
			</span>
			<button className={ Styles.reset_button}onClick={() => resetTemplate()}>Reset</button>
			{currentUser ? (
				<form className={ Styles.user_form}onSubmit={handleSubmit}>
					<input id="input__templatename" type="text" name="title" placeholder="Template Name" className={Styles.floating__input} />
					<label for="input__templatename" className={Styles.floating__label} data-content="Template Name"/>
					<button className={ Styles.save_button}type="submit">Save Template</button>
					

				</form>
			) : (
				""
			)}
		</div>
	)
}

export default TemplateButtons
