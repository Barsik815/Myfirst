import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../Redux/DialogsReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
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
let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;