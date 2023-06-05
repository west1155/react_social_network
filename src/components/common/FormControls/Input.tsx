import React from "react"
import s from "./FormControls.module.css"


export const Input = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched
    return <div className={s.FormControls + " " + (hasError ? s.error : " ")}>
        <div>
            <input {...input} {...props}/>
        </div>
        {hasError && <span>{meta.error}</span>}
    </div>
}