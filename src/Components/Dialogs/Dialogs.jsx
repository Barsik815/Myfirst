import React from "react";
import s from './Dialogs.module.css'
import {Person} from "./Person";
import {Chat} from "./Chat";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../Utils/Validators/validator";

const Dialogs = (props) => {

    let personList = props.dialogsPage.personData.map(p => <Person name={p.name} id={p.id} img={p.img}/>)
    let messageList = props.dialogsPage.messageData.map(m => <Chat message={m.message} id={m.id}/>)

    let sendMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }
    let maxLength = maxLengthCreator(250)

    const MessageArea = (props) => {
        return <form onSubmit={props.handleSubmit}>
            {/* <textarea  onChange={onMessageChange} value={props.dialogsPage.messageText}/>*/}
            <Field component={Textarea} placeholder="Enter your message" name="newMessageBody"
                validate={[requiredField, maxLength]}/>
            <button>Send</button>
        </form>
    }
    const MessageAreaRedux = reduxForm({form: "dialogAddMessageForm"})(MessageArea)
    return (
        <div className={s.dialogs}>
            <div className={s.ppl}>
                {personList}
            </div>
            <div className={s.chat}>
                {messageList}
                <MessageAreaRedux onSubmit={sendMessage}/>
            </div>
        </div>
    )
}
export default Dialogs;