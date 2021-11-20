import React from 'react'
import aboutStyles from "./aboutStyles.module.css"
function About() {
    return (
        <div>
            <div className={aboutStyles.container}>
                <div className={aboutStyles.about_wrapper}>

                <h3>ABOUT THE SITE</h3>
                <p>Computers have been a boon for creativity and imagination. Digital art has, for decades now, been a medium in its own right; and with the advent of NFTs, the future might be very bright indeed for digital artists. The goal of this application is to build an app that let users express their creative side.</p>
                <p>This application was built as part of a Hackathon. The requirements were to build an app that lets people express their creativity in a visual format. You can build ANY application you'd like. Whether it's a blank canvas that you can paint on, a photo-editing app, a shared white board -- or anything else that allows a user to pick a color and apply that color.</p>
                    <p>The engineers behind Webit decided this was a perfect opportunity to not only build an app that allows people to express their creativity but also an app that can be useful in your day to day life. Since this was a Hackathon for developers, the goal was to build something that can help developers. With this goal in mind, the team came up with the idea to create a website design application that functions as a coloring book.</p>
                    <p>Coloring and designing a website is just but one of the many functionalities of this application. As a full stack application, a user can create an account and sign in into the applicatin. A user has the option of copying the code that created the website they see on their screens. There is also a profiles section where users can see other users and view templates that were created by those users, as well as view their own profile and their saved templates.</p>
                </div>
            </div>
            
        </div>
    )
}

export default About
