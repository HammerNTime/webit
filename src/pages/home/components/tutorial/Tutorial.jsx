import React from 'react'
import tutorialStyles from "./tutorialStyles.module.css"

function Tutorial() {
    return (
        <div className={tutorialStyles.full_container}>
            <div className={tutorialStyles.wrapper}>
        <h1>HOW IT WORKS</h1>
    <section className={tutorialStyles.section_container}>
        <div className={tutorialStyles.left_side }>
            <h3>Create an account with us</h3>
            <p>On the landing page, click join now to create an account. You also have the option to create an account on the login page. Go to the account Sign In page. Click Create Account. Enter your email. In the "Username" field, enter a username. Enter and confirm your password. After creating an account, simply sign in and start getting the most out of Webit..</p>
        </div>
                    <div className={`${tutorialStyles.right_side} ${tutorialStyles.right_image}`}>
        < img src = "https://images-cdn.newscred.com/Zz04NjA3ZjljMjQ0ODkxMWViOWRjYzU1OGJkNjI1ZjVkZA==" alt = "" width = "500px" />
        </div >
    </section >

        <section className={tutorialStyles.section_container}>
            < div className={`${tutorialStyles.left_side} ${tutorialStyles.left_image}`}>
                    <img src = "https://images-cdn.newscred.com/Zz04NjA3ZjljMjQ0ODkxMWViOWRjYzU1OGJkNjI1ZjVkZA==" alt = "" width = "500px"/>
            
        </div >
                    <div className={tutorialStyles.right_side}>
            < h3 > Design your website </h3 >
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui accusamus quae quam obcaecati laudantium distinctio odit nam atque, est ab sapiente similique, consequuntur delectus asperiores cum magnam numquam impedit nihil dolores. Nesciunt tenetur officia quibusdam quis libero voluptas, nemo enim odio possimus mollitia at placeat facere, veniam dolorem laboriosam rerum.</p>
        </div >
    </section >

        <section className={tutorialStyles.section_container}>
                    < div className={
                        tutorialStyles.left_side}>
                    <h3>Get your HTML and CSS codes</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui accusamus quae quam obcaecati laudantium distinctio odit nam atque, est ab sapiente similique, consequuntur delectus asperiores cum magnam numquam impedit nihil dolores. Nesciunt tenetur officia quibusdam quis libero voluptas, nemo enim odio possimus mollitia at placeat facere, veniam dolorem laboriosam rerum.</p>
        </div >
        <div className={`${tutorialStyles.right_side} ${tutorialStyles.right_image}`}>
            <img src="https://images-cdn.newscred.com/Zz04NjA3ZjljMjQ0ODkxMWViOWRjYzU1OGJkNjI1ZjVkZA==" alt="" width="500px"/>
        </div>
    </section>
    </div>
        </div>
    )
}

export default Tutorial
