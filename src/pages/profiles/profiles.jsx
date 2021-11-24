import React, { useEffect, useState } from "react"
import { getAllUsers } from "../../services/userService"
import UserCard from "./UserCard"
import userStyles from "./userStyles.module.css"

function Profiles({ currentUser }) {
	const [userList, setUserList] = useState([])

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const users = await getAllUsers()
				setUserList(users)
			} catch (error) {
				throw error
			}
		}
		fetchUsers()
		// return () => { setUserList([]) }
	}, [])

	return (
		<section className={userStyles.wrapper}>
			<div className={userStyles.row}>
				{userList.map((user) => (
					<div>
						<UserCard
							className={userStyles.user}
							avatar={user.avatar}
							name={user.handle}
							templates={user.templates}
							id={user._id}
							currentUser={currentUser}
						/>
					</div>
				))}
			</div>
		</section>
	)
}

export default Profiles
