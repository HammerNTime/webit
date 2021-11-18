import React, { useEffect, useState } from 'react'
import { getAllUsers } from "../../services/userService";
import UserCard from './UserCard';
import userStyles from "./userStyles.module.css"


function Profiles() {
    const [userList, setUserList] = useState([])
    
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const users = await getAllUsers()
                console.log("these are the users", users)
                setUserList(users)
            } catch (error) {
                throw error
            }
        }
        fetchUsers()
        // return () => { setUserList([]) }
    }, [])

    console.log("this is userList", userList)
    return (
        <section className={userStyles.wrapper}>

        <div className={userStyles.row}>
            {userList.map((user) => (
                <div >

                    <UserCard className={userStyles.user} avatar={user.avatar} name={user.handle} />
                </div>
                
            ))}
        </div>
        </section>
    )
}

export default Profiles
