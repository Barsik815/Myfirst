import React, {useState} from 'react'
import s from './ProfileInfo.module.css'
import {Preloader} from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../Assets/Images/profile-icon-png-912.png';
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false)
    if (!profile) {
        return <Preloader/>
    }
    const onProfilePhotoSelect = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        saveProfile(formData).then(()=>{
            setEditMode(false);
        })
    }
    return (
        <div className={s.info}>
            {/* <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Wide_lightning.jpg" width='95%'/>
            </div>*/}
            <div className={s.description}>
                <img src={profile.photos.large || userPhoto} className={s.profilePhoto} alt={""}/>
                {isOwner && <input type={"file"} onChange={onProfilePhotoSelect}/>}
                {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> :
                    <ProfileData profile={profile} isOwner={isOwner} toEditMode={() => {
                        setEditMode(true)
                    }}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                avatar + description
            </div>
        </div>
    )
}
const ProfileData = ({profile, isOwner, toEditMode}) => {
    return <div>

        {isOwner && <button onClick={toEditMode}>edit</button>}

        <div>
            Full name: {profile.fullName}
        </div>
        <div>
            Looking for a job: {profile.lookingForAJob ? "Yes" : "No"}
        </div>
        {profile.lookingForAJob &&
        <div>
            My professional skills: {profile.lookingForAJobDescription}
        </div>}
        <div>
            About me: {profile.aboutMe}
        </div>
        <div>
            Contacts: {Object.keys(profile.contacts).map(key => {
            return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>

    </div>
}

export const Contacts = ({contactTitle, contactValue}) => {
    return <div className={s.contacts}><b>{contactTitle}:</b> {contactValue}</div>
}
export default ProfileInfo;