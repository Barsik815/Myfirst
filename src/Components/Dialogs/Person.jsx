import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export const Person = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.person}>
            <NavLink to={path} className={s.link}><img src={props.img} alt="" />{props.name}</NavLink>
        </div>
    )
}