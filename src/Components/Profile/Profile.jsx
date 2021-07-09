import React from 'react'
import s from './Profile.module.css'
import Myposts from './Myposts/Myposts.jsx'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (<div>
            <ProfileInfo />
            <Myposts />
        </div>
    )
}
export default Profile;