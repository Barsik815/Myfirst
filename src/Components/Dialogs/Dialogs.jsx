import React from "react";
import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom";

const Person = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.person}>
            <NavLink to={path} className={s.link}><img src={props.img} alt="" />{props.name}</NavLink>
        </div>
    )
}

const Chat = (props) => {
    return (
        <div className={s.chat}>
            <div>{props.message}</div>
        </div>
    )
}

const Dialogs = (props) => {
    let personlist = props.dialogsPage.personData.map(p => <Person name={p.name} id={p.id} img={p.img} />)
    let messagelist = props.dialogsPage.messageData.map(m => <Chat message={m.message} id={m.id} />)

    let sendMessage = () => {
        props.sendMessage()
    }
    let onMessageChange = (ev) => {
        let body = ev.target.value;
        props.updateMessageBody(body);
    }

    return (<div className={s.dialogs}>
        <div className= {s.ppl}>
            {personlist}
        </div>
        <div className={s.chat}>
            {messagelist}
            <div>
                <textarea  onChange={onMessageChange} value={props.dialogsPage.messageText}/>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    </div>
    )
}
export default Dialogs;