import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';


import { getProfileById } from '../../services/profileService'

function User(props) {

    // console.log("props", props)
    const { id } = props.match.params

    const navigate = useNavigate()
    console.log("navigate", navigate)

 

    const [userData, setUserData] = useState()
    const [templatesArray, setTemplatesArray] = useState()
    
    const dylanId = "619589fafc89ff148e6ab5c5"

    useEffect(() => {
        
        const fetchUser = async () => {
            try {
                const user = await getProfileById(dylanId)
                setUserData(user)
                setTemplatesArray(user.templates)
                // console.log(userData)
            } catch (error) {
                throw error
            }
        }
        fetchUser()
    }, [dylanId])
    return (
        <div>
            <h1>This is for individual profile page</h1>
            {userData?.handle }
        </div>
    )
}

export default User
