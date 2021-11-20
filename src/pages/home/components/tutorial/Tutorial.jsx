import React from 'react'
import tutorialStyles from "./tutorialStyles.module.css"
import signup from "./images/signup.gif"
import websiteColoring from "./images/codepen.gif"

function Tutorial() {
    return (
        <div className={tutorialStyles.full_container}>
            <div className={tutorialStyles.wrapper}>
        <h1>HOW IT WORKS</h1>
    <section className={tutorialStyles.section_container}>
                    <div className={tutorialStyles.left_side}>
                    <div className={ tutorialStyles.section_info}>
                            
            <h3>Create an account with us</h3>
            <p>On the landing page, click "Join now" to create an account. You also have the option to create an account on the login page. Go to the account Sign In page. Click Create Account. Enter your email. In the "Username" field, enter a username. Choose your avatar in the avatar selection menu. Enter and confirm your password. After creating an account, simply "Sign in" and start getting the most out of Webit..</p>
                            </div>
        </div>
                    <div className={`${tutorialStyles.right_side} ${tutorialStyles.right_image}`}>
                        <img src={signup} alt="website demonstration" width="550px" />
        </div >
    </section >

        <section className={tutorialStyles.section_container}>
            < div className={`${tutorialStyles.left_side} ${tutorialStyles.left_image}`}>
                        <img src={ websiteColoring}alt = "website demonstration" width="550px" />
            
        </div >
                    <div className={tutorialStyles.right_side}>
                    <div className={ tutorialStyles.section_info}>
                            
            < h3 > Design your website </h3 >
                <p>Now that you are logged in, click on the design link on the top right. You will be taken to a page with a website template on the left and controls on the right. Simply click on a color and click on the part of the website you want to apply that color to. You have the option of switching between changing text colors and background colors. When you are finished, simply name your wonderful creation and save it to your profile.</p>
                            </div>
        </div >
    </section >

        <section className={tutorialStyles.section_container}>
                    < div className={
                        tutorialStyles.left_side}>
                        <div className={ tutorialStyles.section_info}>
                            
                    <h3>Get your HTML and CSS codes</h3>
                <p>You have designed a site that you like, a site you will like to use. We give you the option of using this site without having to write any code! Simply click on "Copy Code". In the new popup window, you will see your HTML code followed by your CSS code. Simply click "copy" on the top right to copy the text' contents. Paste your copied code in your favorite code editor and watch your masterpiece come to life! </p>
                        </div>
        </div >
        <div className={`${tutorialStyles.right_side} ${tutorialStyles.right_image}`}>
                        <img src={websiteColoring} alt="" width="550px" />
        </div>
    </section>
    </div>
        </div>
    )
}

export default Tutorial
