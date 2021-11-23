import React from "react"
import Hero from "./components/hero/Hero"
import Tutorial from "./components/tutorial/Tutorial"
import Team from "./components/team/Team"
import About from "./components/about/About"

function Landing() {
	return (
		<div>
			<Hero />
			<Tutorial />
			<Team />
			<About />
		</div>
	)
}

export default Landing
