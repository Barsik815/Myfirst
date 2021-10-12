import React from 'react'
import s from './Profile.module.css'
import Myposts from './Myposts/Myposts.jsx'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (<div>
            <ProfileInfo />
            <Myposts posts={props.profileData.posts}
                     dispatch={props.dispatch}
                     postText={props.profileData.postText}/>
        </div>
    )
}
export default Profile;