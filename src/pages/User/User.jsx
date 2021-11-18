import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import UserCard from './components/UserCard';
import Template from "./components/Template"
import profileStyles from ".././profile/profile.module.css"



import { getProfileById } from '../../services/profileService'

function User(props, {currentUser}) {

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
               <div className={profileStyles.container}>
                <div className={profileStyles.menu}>
                    <h1>{userData?.handle}</h1>
                </div>
                <div className={ profileStyles.content}>
            <div className={profileStyles.info}>
                        <div className={profileStyles.image_wrapper}>
                <img src={userData?.avatar} alt="" width="200px"/>
            </div>
                        <h2>{userData?.templates.length} Templates</h2>
                    </div>
                    <div className={profileStyles.profile__templates}>
                        
                    <div className={profileStyles.profile__items_wrapper}>
            {templatesArray?.map((template) => (

                    <Template template={template} backgroundColors={template.backgroundColors} textColors={template.textColors} title={template.template_title ? template.template_title : "Special Template"} id={template._id} currentUser={currentUser} profileId={params.id} />
                    ))}
                    </div>
                    </div>
        </div>
    </div>
            {/* <header className={profileStyles.header}>
                <h1>Dylan Hammer's Profile</h1>
            </header>
            <div className={profileStyles.profile__page}>
                <div className={profileStyles.profile__left}>

                    <UserCard handle={userData?.handle} avatar={userData?.avatar} templates={userData?.templates} />
                    </div>
                    <div className={profileStyles.profile__right}>
            {templatesArray?.map((template) => (

                <Template template={template} backgroundColors={template.backgroundColors} textColors={template.textColors} title={template.template_title ? template.template_title : "Special Template"} id={ template._id} userId={params.id}/>
            ))}

                    </div>
        </div> */}
        </div>
    )
}

export default User
