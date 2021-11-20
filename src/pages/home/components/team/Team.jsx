import React from "react"
import { team } from "./data/team"
import ProfileCard from "./profileCard/ProfileCard"
import profileStyles from "./profileCard/profileCardStyles.module.css"



function Team() {
    return (
        <>
         
            <div className={profileStyles.page_container}>
                <h2>Meet The Team Behind Webit.</h2>

        <div className={profileStyles.card_container}>
            {team.map((person) => (
                <ProfileCard name={person.name} bio={person.bio} title={person.title} photo={person.photo} socials={person.social} />
            ))}
            
                </div>
                </div>
            </>
    )
}

export default Team

