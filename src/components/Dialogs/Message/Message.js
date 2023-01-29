import React from "react";
import s from './Message.module.css';


const Message = (props) => {
    return (
        <div className={s.messages}>
            {props.message}
        </div>
    );
}


export default Message;