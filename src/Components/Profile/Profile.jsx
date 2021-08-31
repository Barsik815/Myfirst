import React from 'react'
import s from './Profile.module.css'
import Myposts from './Myposts/Myposts.jsx'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (<div>
            <ProfileInfo />
            <Myposts posts={props.posts} />
        </div>
    )
}
export default Profile;