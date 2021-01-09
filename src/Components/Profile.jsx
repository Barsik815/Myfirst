import React from 'react'
import style from './Profile.module.css'

const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Wide_lightning.jpg" width='95%'/>
            </div>
            <div>
                avatar + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>
            </div>
        </div>
    )
}
export default Profile;