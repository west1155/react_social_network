import React from "react";
import s from './Dialog.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialog = (props) => {


    let newTextHere = React.createRef();
    window.dialogsf = props.dialogsPage

    let dialogElements = props.dialogsPage.dialogs.map (d => <DialogItem name={d.name} id={d.id} />);
    let messagesElement = props.dialogsPage.messages.map(m => <Message message={m.message} />);
    let newMessageBody = props.dialogsPage.newMessageBody;


    let OnMessageChange = (e) => {
        let text = newTextHere.current.value;
        props.updateNewMessageBody(text);
    }

    let OnMessageSendClick = () => {
        props.sendMessage();
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>

            <div className={s.messages}>
                {messagesElement}
            </div>

            <div></div>
            <div>
                <textarea className={s.text_area}
                          value={newMessageBody}
                          ref={newTextHere}
                          placeholder={"Enter your message"}
                          onChange={OnMessageChange}>

                </textarea>
                <div>
                    <button className={s.button}
                            onClick={OnMessageSendClick}>
                        Send
                    </button>
                </div>
            </div>
        </div>


    )
        ;
}


export default Dialog;
