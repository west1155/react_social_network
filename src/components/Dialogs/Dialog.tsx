import React from "react";
// @ts-ignore
import s from './Dialog.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialog = (props) => {

    let dialogElements = props.dialogsPage.dialogs.map (d => <DialogItem name={d.name} id={d.id} />);
    let messagesElement = props.dialogsPage.messages.map(m => <Message message={m.message} />);

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
                <AddMessageForm postMessage={props.sendMessage}/>
            </div>
        </div>


    )
        ;
}


export default Dialog;
