import React from "react";
import s from "./ProfileInfo.module.css"
import style from "../../FormsControls/FormsControls.module.css"
import {Contacts} from "./ProfileInfo";
import {createField, Input, Textarea} from "../../FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({handleSubmit, profile,error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>Save</button>
            {error && <div className={style.formSummeryError}>{error}</div>}

        </div>
        <div>
            Full name: {createField("input", "Full Name", "fullName", Input,
            [])}
        </div>
        <div>
            Looking for a job: {createField("checkbox", "", "lookingForAJob", Input,
            [])}
        </div>
        <div>
            My professional skills: {createField("textarea", "My professional skills",
            "lookingForAJobDescription", Textarea, [])}
        </div>
        <div>
            About me: {createField("textarea", "About me",
            "aboutMe", Textarea, [])}
        </div>
        <div>
            Contacts: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contacts}>
                <b>{key}: {createField("input", key, "contacts." + key, Input,
                    [])}</b>
            </div>
        })}
        </div>

    </form>
}
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;