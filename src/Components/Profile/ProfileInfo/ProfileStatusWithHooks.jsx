import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status)
    }, [props.status])

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    };
    const activateEditMode = () => {
        setEditMode(true);
    };
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return <>
        {editMode
            ? <div><input autoFocus={true} onChange={onStatusChange} onBlur={deactivateEditMode} value={status}/></div>
            : <div><span onDoubleClick={activateEditMode}>{props.status || "No Status"}</span></div>
        }
    </>
}

export default ProfileStatusWithHooks