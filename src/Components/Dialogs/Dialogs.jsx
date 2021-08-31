import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Person = (props) =>{
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.person}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Chat = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let personlist = props.persondata.map (p=> <Person name={p.name}  id={p.id}/>)
    let messagelist = props.messagedata.map (m=> <Chat message={m.message}  id={m.id}/>)

    return (<div className={s.dialogs}>
            <div className={s.ppl}>
                {personlist}
            </div>
            <div className={s.chat}>
                {messagelist}
            </div>
        </div>
    )
}
export default Dialogs;