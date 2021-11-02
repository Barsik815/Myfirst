import React from 'react'
import s from './ProfileInfo.module.css'
import {Preloader} from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.info}>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Wide_lightning.jpg" width='95%'/>
            </div>
            <div className={s.description}>
                {console.log(props)}
                <img src={props.profile.photos.large}/>
                avatar + description
            </div>
        </div>
    )
}
export default ProfileInfo;