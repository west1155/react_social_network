
import {sendMessageActionCreator} from "../redux/dialog-reducer";
import Dialog from "./Dialog";
import {connect} from "react-redux"


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage : (postMessage) => { dispatch(sendMessageActionCreator(postMessage)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialog)
