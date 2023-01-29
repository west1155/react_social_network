
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../redux/dialog-reducer";
import Dialog from "./Dialog";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage : () => { dispatch(sendMessageActionCreator()) },
        updateNewMessageBody: (body) => {dispatch(updateMessageTextActionCreator(body))}
    }
}


const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default DialogContainer;
