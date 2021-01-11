import React from 'react'
import style from './Profile.module.css'
import Myposts from './Myposts/Myposts.jsx'

const Profile = () => {
    return (    <div className={style.content}>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Wide_lightning.jpg" width='95%'/>
            </div>
            <div>
                avatar + description
            </div>
        <Myposts />
        </div>
    )
}
export default Profile;