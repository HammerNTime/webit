import React, {  useState } from "react";
import profileStyles from "./profileCardStyles.module.css"
import Modal from "react-modal";

Modal.setAppElement("#root");

function ProfileCard({ name, bio, title, photo, socials }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);


    return (
        <div>
            <section onClick={ () => setModalIsOpen(true)}className={profileStyles.profile_card}>
        <div className={profileStyles.profile_image}>
                    <img className={ profileStyles.image}src={photo} width="500px"alt=""/>
        </div>
                <div className={profileStyles.info}><h3>{ name}</h3>
                    <p>{ title}</p></div>

            </section>
            <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0,0,0.8)",
            },
            content: {
              width: "90vw",
              height: "90vh",
              boxShadow: "0 5px 16px rgba(0, 0, 0, 0,2)",
              background: "#fff",
              color: "#000",
                borderRadius: "10px",
                overflow: "hidden",
                padding: 0
          
            },
          }}
        >
        <div className={profileStyles.modal_wrapper}>
                    <div className={profileStyles.modal_container} style={{
                        background: `linear-gradient(rgba(27,16,16,0.85), rgba(17,12,12,0.85)), url(${photo})`,
        
        
        
        
        
                        backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed", backgroundPosition: "center center"
                    }}>
                        <div onClick={ () => setModalIsOpen(false)}className={profileStyles.left_bar}> <i class="fas fa-arrow-left"></i>
        </div>
        <div className={profileStyles.info_container}>
            <img className={profileStyles.prof_img} src={photo} alt="" width="500px"/>
            <div className={profileStyles.modal_info}>
                                <h3>{ name}</h3>
                                <span>{title}</span>
                                <div className={profileStyles.modal_socials}>
                                    <a target="_blank" rel="noreferrer" href={socials.linkedin}><i class="fab fa-linkedin"></i></a>
                                    <a target="_blank" rel="noreferrer"href={socials.github}><i class="fab fa-github"></i></a>
                                    <a  href={socials.email}><i class="fas fa-envelope"></i></a>

                                    
                                </div>
                                <p dangerouslySetInnerHTML={{__html: bio}}></p>
                
            </div>
        </div>
        </div>
    </div>
          
        </Modal>
            
        </div>
    )
}

export default ProfileCard
