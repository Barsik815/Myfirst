import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.info}>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Wide_lightning.jpg" width='95%'/>
            </div>
            <div className={s.description}>
                avatar + description
            </div>
        </div>
    )
}
export default ProfileInfo;