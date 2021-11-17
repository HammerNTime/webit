import React from 'react'
import './UserCard.css'

const UserCard = (props) => {
    const { user } = props

    return (
        user &&
        <div className="user-card">
            <img src={user.avatar} alt="user animal avatar"></img>
            <div className="user-info">
                <h4>{user.handle}</h4>
                <p>{user.solution_count} Solutions</p>
            </div>
        </div>
    )
}

export default UserCard