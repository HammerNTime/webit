import profileStyles from "../../profile/profile.module.css"
import React, { useEffect, useState } from "react"
import { deleteTemplate } from "../../../services/templateService"
import Modal from "react-modal";


Modal.setAppElement("#root");

function Template({ backgroundColor, textColor, template, title, id, userId }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

	let bg1 = template.backgroundColors[0]
	let bg2 = template.backgroundColors[1]
	let bg3 = template.backgroundColors[2]
	let bg4 = template.backgroundColors[3]
	let bg5 = template.backgroundColors[4]
	const handleDeleteTemplate = async () => {
		try {
			const deletedTemplate = await deleteTemplate(id, userId)
            console.log(deletedTemplate)
            setModalIsOpen(false)
		} catch (error) {
			throw error
		}
    }
    
    const closeModal = () => setModalIsOpen(false)
	return (
        <div className={profileStyles.profile__post__container}>
            <div className={profileStyles.user__posts}>
            <div className={profileStyles.delete__title}>

				<a href={`/templates/${id}`}>
					<h3>{title}</h3>{" "}
                    </a>
                    <div style={{cursor: "pointer"}}onClick={() => {
						setModalIsOpen(true)
					}}>
                        <i class="fas fa-trash"></i>
                        

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
                textAlign: "center"
              
            },
          }}
        >
          
                            <div className={profileStyles.modal}>
                                <h1>Are you sure you want to delete { title}?</h1>
                            </div>
                            <div className={profileStyles.modal_buttons}>
                                <button className={ profileStyles.delete_button}style={{margin: "1rem 5rem"}} onClick={() => {
						handleDeleteTemplate()
					}}>Delete</button>
                                <button className={profileStyles.cancel_button} style={{ margin: "1rem 5rem" }} onClick={() => { closeModal() }}>Cancel</button>
                            </div>
          
        </Modal>
                    </div>
				
                    </div>
                
				<div className={profileStyles.template__palette}>
					<div
						style={{ backgroundColor: bg1 }}
						className={profileStyles.template__color}
					>
						<p>#23564</p>
					</div>
					<div
						style={{ backgroundColor: bg2 }}
						className={profileStyles.template__color}
					>
						<p>#23564</p>
					</div>
					<div
						style={{ backgroundColor: bg3 }}
						className={profileStyles.template__color}
					>
						<p>#23564</p>
					</div>
					<div
						style={{ backgroundColor: bg4 }}
						className={profileStyles.template__color}
					>
						<p>#23564</p>
					</div>
					<div
						style={{ backgroundColor: bg5 }}
						className={profileStyles.template__color}
					>
						<p>#23564</p>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Template
