import React from 'react'
import s from './Profile.module.css'
import Myposts from './Myposts/Myposts.jsx'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (<div>
            <ProfileInfo />
            <Myposts posts={props.profileData.posts}
                     addPost={props.addPost}
                     postText={props.profileData.postText}
                     updatePostText={props.updatePostText}/>
        </div>
    )
}
export default Profile;