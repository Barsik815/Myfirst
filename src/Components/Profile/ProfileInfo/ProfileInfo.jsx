import React from 'react'
import s from './ProfileInfo.module.css'
import {Preloader} from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
console.log(props)
    return (
        <div className={s.info}>
           {/* <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Wide_lightning.jpg" width='95%'/>
            </div>*/}
            <div className={s.description}>
                <img src={props.profile.photos.large}/>
                <p>{props.profile.aboutMe}</p>
                <ProfileStatus status={"Hey"}/>
                avatar + description
            </div>
        </div>
    )
}
export default ProfileInfo;