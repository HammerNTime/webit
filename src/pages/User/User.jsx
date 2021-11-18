import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import UserCard from './components/UserCard';
import Template from "./components/Template"


import { getProfileById } from '../../services/profileService'

function User(props) {

    // console.log("props", props)
    // const { id } = props.match.params
    const params = useParams()
    // console.log("this is id", i.id)


    const navigate = useNavigate()

 

    const [userData, setUserData] = useState()
    const [templatesArray, setTemplatesArray] = useState()
    // const [backgroundColors, setBackgroundColors] = useState()
    // const [ textColors, setTextColors] = useState()
    
    const dylanId = "619589fafc89ff148e6ab5c5"

    useEffect(() => {
        
        const fetchUser = async () => {
            try {
                const user = await getProfileById(params.id)
                setUserData(user)
                setTemplatesArray(user.templates)
                
                // setBackgroundColors(userData?.templates[0].backgroundColors)
                // setTextColors(userData?.templates[0].textColors)
            } catch (error) {
                throw error
            }
        }
        fetchUser()
    }, [params.id])

    return (
        <div>
            <h1>This is for individual profile page</h1>
            <UserCard handle={userData?.handle} avatar={userData?.avatar} templates={userData?.templates} />
            {templatesArray?.map((template) => (

                <Template template={template} backgroundColors={template.backgroundColors} textColors={template.textColors} title={template.template_title ? template.template_title : "Special Template"} id={ template._id}/>
            ))}
        </div>
    )
}

export default User
