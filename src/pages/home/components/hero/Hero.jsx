import React from 'react'
import homeStyles from "./homeStyles.module.css"
import LandingAnimation from '../../../../components/misc/LandingAnimation'
import hero from "../../../../assets/animation/hero.json"
import { Link }from "react-router-dom"

function Hero() {
    return (
        <div className={homeStyles.full_container}>
            <section className={homeStyles.landing}>
        <div className={homeStyles.text_into}>
            <h2>WEBIT</h2>
            <h4 className={homeStyles.tag_line}>Color-Code Your Site</h4>
            <h3>A coloring book for developers. Learn to design a site the fun way. Sign up now and join others as you show off your design and coloring skills!</h3>
                    <Link to="/signup">
                        
                    <button> Join Now</button>
            </Link>
        </div>
            <div className={homeStyles.img_intro}>
                    <LandingAnimation animData={hero}  />
                
        </div>
        <img src="" alt="" className="wave"/>
    </section>
        </div>
    )
}

export default Hero
