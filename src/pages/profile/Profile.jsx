import React from "react"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react/cjs/react.development"
import profileStyles from "./profile.module.css"
import { getProfileById } from "../../services/profileService"
import Template from "../User/components/Template"

function Profile({ currentUser, handleLogout, setCurrentUser }) {
	const [user, setUser] = useState()
	const [templates, setTemplates] = useState()
	const { _id, avatar, handle } = currentUser

	useEffect(() => {
		if (currentUser) {
			const fetchUser = async () => {
				try {
					const user = await getProfileById(currentUser?._id)
					setUser(user)
					setTemplates(user.templates)
				} catch (error) {
					throw error
				}
			}
			fetchUser()
		}
	}, [currentUser])

	console.log(user?.templates, "current user")
	console.log("i am templates", templates)

	return (
		<div className={profileStyles.profile__page}>
			<div className={profileStyles.profile__left}>
				<div className={profileStyles.profile__user__info}>
					<img src={avatar} alt="user avatar"></img>
					<h3>{handle}</h3>

					<h4>Number of templates: {user?.templates.length}</h4>

					<button>
						<Link to="/">Home</Link>
					</button>
					<button>
						<Link to="/">Create a new template</Link>
					</button>

						<button onClick={handleLogout}><Link to="/">Logout</Link></button>
				</div>
			</div>
			<div className={profileStyles.profile__right}>
				<div className={profileStyles.profile__post__container}>
					<div className={profileStyles.sub__container}>
						<div className={profileStyles.profile__posts__header}>
							<h3>Your Templates</h3>
						</div>
					</div>

					<div className={profileStyles.user__posts}>
						{templates?.map((template) => (
							<Template
								template={template}
								backgroundColors={template?.backgroundColors}
								textColors={template?.textColors}
								title={
									template?.template_title
										? template?.template_title
										: "Special Template"
								}
								id={template?._id}
								userId={currentUser?._id}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile
