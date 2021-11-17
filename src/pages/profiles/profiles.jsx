import React, { useEffect, useState } from 'react'
import { getAllUsers } from "../../services/userService";
import UserCard from './UserCard';

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
        <div>
            This is for the users
            {/* {userList.map((user) => (
                <UserCard/>
                
            ))} */}
        </div>
    )
}

export default Profiles
