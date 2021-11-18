import React from 'react'
import userStyles from "./userStyles.module.css"

function userCard({ avatar, name, templates, id, currentUser}) {
    return (
        <div className={userStyles.container}>
            <div className={userStyles.profile_card}>
    <header>
  
      <a href={currentUser._id === id ? `/profile` : `/profiles/${id}`}>
                        <img src={ avatar}size="200" alt="profile" />
      </a>
  
      <h1>{name}</h1>
   
                    <h2>{ templates.length > 1 ? templates.length + " templates" : templates.length === 1 ? templates.length + " template" : "No Templates"}</h2>
  
                </header>
               
    
  
  
</div>
        </div>
        









        
    )
}

export default userCard
