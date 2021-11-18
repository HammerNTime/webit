import React from 'react'
import profileStyles from "../../profile/profile.module.css"
import { Link } from "react-router-dom"

function UserCard({avatar, handle, templates}) {
    return (
       
                <div className={profileStyles.profile__left}>
            <div className={profileStyles.profile__user__info}>
                <img src={avatar} alt="user avatar"></img>
                <h3>{handle}</h3>

                <h4>Number of templates:  { templates?.length}</h4>

                <button><Link to="/">Home</Link></button>
                <button><Link to="/">Create a new template</Link></button>



                <button >Something here</button>
            </div>
        </div>
     
    )
}

export default UserCard
