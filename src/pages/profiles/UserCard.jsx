import React from 'react'
import userStyles from "./userStyles.module.css"

function userCard({ avatar, name}) {
    return (
        <div className={userStyles.container}>
            <div className={userStyles.profile_card}>
    <header>
  
      <a href="#">
                        <img src={ avatar}size="200" alt="profile" />
      </a>
  
      <h1>{name}</h1>
   
      <h2>3 Templates</h2>
  
    </header>
  
    
  
  
</div>
        </div>
        









        
    )
}

export default userCard
