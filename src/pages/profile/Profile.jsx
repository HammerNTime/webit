import React from 'react'
import { Link } from "react-router-dom"
import profileStyles from "./profile.module.css"

function Profile({currentUser, handleLogout}) {
    const { _id, avatar, handle } = currentUser || {}
    
    
    return (
        <div className={profileStyles.profile__page}>
        <div className={profileStyles.profile__left}>
            <div className={profileStyles.profile__user__info}>
                <img src={avatar} alt="user avatar"></img>
                <h3>{handle}</h3>

                <h4>Number of templates: 2</h4>

                <button><Link to="/">Home</Link></button>
                <button><Link to="/">Create a new template</Link></button>



                <button onClick={handleLogout}>Sign Out</button>
            </div>
        </div>
        <div className={profileStyles.profile__right}>
            <div className={profileStyles.profile__post__container}>
                <div className={profileStyles.sub__container}>
                    <div className={profileStyles.profile__posts__header}>
                        <h3>Your Templates</h3>
                    </div>
                </div>

                    <div className={profileStyles.user__posts}>
                        This will be templates created by the user
                        <ul>
                            <li>Template name (picture from color-palette)</li>
                            <p>Will look something like this:</p>
                            <h3>Template Name/ id</h3>
                            <div className={profileStyles.template__palette}>
                                <div style={{backgroundColor: "red"}} className={profileStyles.template__color} ><p>#23564</p></div>
                                <div style={{backgroundColor: "yellow"}} className={profileStyles.template__color}><p>#23564</p></div>
                                <div style={{backgroundColor: "green"}} className={profileStyles.template__color}><p>#23564</p></div>
                                <div style={{backgroundColor: "blue"}} className={profileStyles.template__color}><p>#23564</p></div>
                                <div style={{backgroundColor: "orange"}} className={profileStyles.template__color}><p>#23564</p></div>
                            </div>
                            
                            <h3>Template Name/ id</h3>
                            <div className={profileStyles.template__palette}>
                                <div style={{backgroundColor: "yellow"}} className={profileStyles.template__color} ><p>#23564</p></div>
                                <div style={{backgroundColor: "darkblue"}} className={profileStyles.template__color}><p>#23564</p></div>
                                <div style={{backgroundColor: "pink"}} className={profileStyles.template__color}><p>#23564</p></div>
                                <div style={{backgroundColor: "lightblue"}} className={profileStyles.template__color}><p>#23564</p></div>
                                <div style={{backgroundColor: "grey"}} className={profileStyles.template__color}><p>#23564</p></div>
                            </div>
                            
                        </ul>

                    

                </div>

            </div>
        </div>
    </div>
    

    )
}

export default Profile
