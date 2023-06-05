import React from "react"
import s from "./FormControls.module.css"


export const TextArea = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched
    return <div className={s.FormControls + " " + (hasError ? s.error : " ")}>
        <div>
            <textarea {...input} {...props}/>
        </div>
        {hasError && <span>{meta.error}</span>}
    </div>
}