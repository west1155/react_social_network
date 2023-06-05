import React from 'react'
import {useFormik} from "formik";
import * as Yup from 'yup';

import s from './AddMessageForm.module.css'

const AddMessageForm = (props) => {


    const MessageForm = useFormik({
        initialValues: {
            textMessage: "",
        },
        onSubmit: (values) => {
            props.postMessage(values.textMessage)
        },
        validationSchema: Yup.object({
            textMessage: Yup.string()
                .max(10,"Must be 10 characters or less")
                .required("Required")

        })
    })
    return <div>
        <form onSubmit={MessageForm.handleSubmit}>
            <div className={"input-container"}>
                <input
                    className={s.text_area}
                    id={"textMessage"}
                    type={"text"}
                    placeholder={"Text Here"}
                    onChange={MessageForm.handleChange}
                    value={MessageForm.values.textMessage}
                />
                {MessageForm.errors.textMessage ? <p> {MessageForm.errors.textMessage} </p> : null}
            </div>
            <button className={s.button} type="submit">Send Message</button>

        </form>
    </div>
}


export default AddMessageForm
