import profileStyles from "../../profile/profile.module.css"
import React, { useEffect, useState } from "react"
import { deleteTemplate } from "../../../services/templateService"
import Modal from "react-modal"

Modal.setAppElement("#root")

function Template({
	backgroundColor,
	textColor,
	template,
	title,
	id,
	userId,
	currentUser,
	profileId,
}) {
	const [modalIsOpen, setModalIsOpen] = useState(false)

	let bg1 = template.backgroundColors[0]
	let bg2 = template.backgroundColors[1]
	let bg3 = template.backgroundColors[3]
	let bg4 = template.backgroundColors[8]
	let bg5 = template.backgroundColors[11]
	
	const handleDeleteTemplate = async () => {
		try {
			const deletedTemplate = await deleteTemplate(id, userId)
			console.log(deletedTemplate)
			setModalIsOpen(false)
			window.location.reload(false)
		} catch (error) {
			throw error
		}
	}
	function invertColor(hex, bw) {
		if (hex.indexOf("#") === 0) {
			hex = hex.slice(1)
		}
		// convert 3-digit hex to 6-digits.
		if (hex.length === 3) {
			hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
		}
		var r = parseInt(hex.slice(0, 2), 16),
			g = parseInt(hex.slice(2, 4), 16),
			b = parseInt(hex.slice(4, 6), 16)
		if (bw) {
			// https://stackoverflow.com/a/3943023/112731
			return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF"
		}
		// invert color components
		r = (255 - r).toString(16)
		g = (255 - g).toString(16)
		b = (255 - b).toString(16)
		// pad each with zeros and return
		return "#" + padZero(r) + padZero(g) + padZero(b)
	}
	function padZero(str, len) {
		len = len || 2
		var zeros = new Array(len).join("0")
		return (zeros + str).slice(-len)
	}
	return (
		<div className={profileStyles.profile__post__container}>
			<div className={profileStyles.user__posts}>
				<div className={profileStyles.delete__title}>
					<a href={`/templates/${id}`}>
						<h3>{title}</h3>{" "}
					</a>
					{currentUser === profileId ? (
						<>
							<div
								style={{ cursor: "pointer" }}
								onClick={() => {
									setModalIsOpen(true)
								}}
							>
								<i class="fas fa-trash"></i>
							</div>
							<Modal
								isOpen={modalIsOpen}
								onRequestClose={() => setModalIsOpen(false)}
								style={{
									overlay: {
										backgroundColor: "rgba(0, 0,0,0.8)",
									},
									content: {
										width: "800px",
										height: "500px",
										boxShadow: "0 5px 16px rgba(0, 0, 0, 0,2)",
										background: "#fff",
										color: "#000",
										borderRadius: "10px",
										position: "absolute",
										top: "50%",
										left: "50%",
										right: "auto",
										bottom: "auto",
										marginRight: "-50%",
										transform: "translate(-50%, -50%)",
										display: "flex",
										flexDirection: "column",
										justifyContent: "center",
										alignItems: "center",
										textAlign: "center",
									},
								}}
							>
								<div className={profileStyles.modal}>
									<h1>Are you sure you want to delete {title}?</h1>
								</div>
								<div className={profileStyles.modal_buttons}>
									<button
										className={profileStyles.delete_button}
										style={{ margin: "1rem 5rem" }}
										onClick={() => {
											handleDeleteTemplate()
										}}
									>
										Delete
									</button>
									<button
										className={profileStyles.cancel_button}
										style={{ margin: "1rem 5rem" }}
										onClick={() => {
											setModalIsOpen(false)
										}}
									>
										Cancel
									</button>
								</div>
							</Modal>
						</>
					) : (
						""
					)}
				</div>

				<div className={profileStyles.template__palette}>
					<div
						style={{ backgroundColor: bg1, color: `${invertColor(bg1.slice(0,7))}` }}
						className={profileStyles.template__color}
					>
						<p>{bg1.slice(0,6)}</p>
					</div>
					<div
						style={{ backgroundColor: bg2, color: `${invertColor(bg2.slice(0,7))}` }}
						className={profileStyles.template__color}
					>
						<p>{bg2.slice(0,6)}</p>
					</div>
					<div
						style={{ backgroundColor: bg3, color: `${invertColor(bg3.slice(0,7))}` }}
						className={profileStyles.template__color}
					>
						<p>{bg3.slice(0,6)}</p>
					</div>
					<div
						style={{ backgroundColor: bg4, color: `${invertColor(bg4.slice(0,7))}` }}
						className={profileStyles.template__color}
					>
						<p>{bg4.slice(0,6)}</p>
					</div>
					<div
						style={{ backgroundColor: bg5, color: `${invertColor(bg5.slice(0,7))}` }}
						className={profileStyles.template__color}
					>
						<p>{bg5.slice(0,6)}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Template
