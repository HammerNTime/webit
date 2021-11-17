import React from 'react'
import userStyles from "./userStyles.module.css"

function userCard() {
    return (
        <div className={userStyles.container}>
            <div className={userStyles.info}>
                <img src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg" alt="" />
                <h3>Junior</h3>
                <button>View</button>
       </div>
            
        </div>
    )
}

export default userCard
