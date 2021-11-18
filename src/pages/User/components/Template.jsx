import profileStyles from "../../profile/profile.module.css"
import React, { useEffect, useState } from 'react'



function Template({ backgroundColor, textColor, template, title, id }) {


   

    let bg1 = template.backgroundColors[0]
    let bg2 = template.backgroundColors[1]
    let bg3 = template.backgroundColors[2]
    let bg4 = template.backgroundColors[3]
    let bg5 = template.backgroundColors[4]
    return (

            <div className={profileStyles.profile__post__container}>

            

            <div className={profileStyles.user__posts}>
                                <a href={`/templates/${id}`}><h3>{ title}</h3> </a>
                                <div className={profileStyles.template__palette}>
                                <div style={{backgroundColor: bg1 }} className={profileStyles.template__color} ><p>#23564</p></div>
                                <div style={{backgroundColor: bg2}} className={profileStyles.template__color}><p>#23564</p></div>
                                <div style={{backgroundColor: bg3}} className={profileStyles.template__color}><p>#23564</p></div>
                                <div style={{backgroundColor: bg4}} className={profileStyles.template__color}><p>#23564</p></div>
                                <div style={{backgroundColor: bg5}} className={profileStyles.template__color}><p>#23564</p></div>
                            </div>
                   
               
</div>
                </div>
    )
}

export default Template
