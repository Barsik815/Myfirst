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

const Dialogs = () => {
    return (<div className={s.dialogs}>
            <div className={s.ppl}>
                <Person name='Maksim' id='1' />
                <Person name='Ivan' id='2' />
                <Person name='Katya' id='3' />
                <Person name='Bogdan' id='4' />
                <Person name='Diana' id='5' />
                <Person name='Ellie' id='6' />
                <Person name='Sasha' id='7' />
            </div>
            <div className={s.chat}>
                <Chat message='Hey!' />
                <Chat message='How do you do?' />
                <Chat message="I've just arrived to Ukraine!" />
                <Chat message='Are you there?' />
            </div>
        </div>
    )
}

export default Dialogs;