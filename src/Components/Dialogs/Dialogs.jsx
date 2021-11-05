import React from "react";
import s from './Dialogs.module.css'
import {Person} from "./Person";
import {Chat} from "./Chat";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {


    let personList = props.dialogsPage.personData.map(p => <Person name={p.name} id={p.id} img={p.img} />)
    let messageList = props.dialogsPage.messageData.map(m => <Chat message={m.message} id={m.id} />)

    let sendMessage = () => {
        props.sendMessage()
    }
    let onMessageChange = (ev) => {
        let body = ev.target.value;
        props.updateMessageBody(body);
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>;

    return (<div className={s.dialogs}>
        <div className= {s.ppl}>
            {personList}
        </div>
        <div className={s.chat}>
            {messageList}
            <div>
                <textarea  onChange={onMessageChange} value={props.dialogsPage.messageText}/>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    </div>
    )
}
export default Dialogs;