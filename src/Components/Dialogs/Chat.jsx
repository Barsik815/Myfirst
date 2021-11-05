import s from "./Dialogs.module.css";
import React from "react";

export const Chat = (props) => {
    return (
        <div className={s.chat}>
            <div>{props.message}</div>
        </div>
    )
}