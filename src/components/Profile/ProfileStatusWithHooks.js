import React, {useEffect, useState} from "react";


const ProfileStatusWithHooks = (props) => {
    // editMode is a input - span switch, setEditMode is a func which switches
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => setStatus(props.status), [props.status])

    const onEditMode = () => {
            setEditMode(true)
    }

    const offEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)

    }


    return <div>
        {(!editMode) && <div>
            <span onDoubleClick={onEditMode}>{props.status || "--------"}</span>
        </div>}
        {(editMode) && <div>
            <input onChange={onStatusChange}
                   onBlur={offEditMode}
                   autoFocus={true}
                   placeholder={"text here..."}
                   value={status}
            ></input>
        </div>

        }
    </div>
}


export default ProfileStatusWithHooks