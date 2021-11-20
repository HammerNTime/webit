import React from "react";
import Lottie from 'react-lottie-player'

const LandingAnimation = (props) => {

    return (
        <div>
            <Lottie
                loop
                animationData={props.animData}
                play
                speed={1}
                style={{ width: '700px', height: '700px' }}
            />
        </div>
    )
}
export default LandingAnimation