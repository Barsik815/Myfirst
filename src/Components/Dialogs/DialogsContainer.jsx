import React from "react";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { sendMessageActionCreator, updateMessageTextActionCreator } from "../../Redux/DialogsReducer";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageBody: (body) => {
            dispatch(updateMessageTextActionCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;