import React from "react";
import {Field, reduxForm} from "redux-form";
import {MaxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormControls/Textarea";


let MyPostForm = props => {

    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name='postMessage'
                           placeholder='Write here'
                           validate={[required, MaxLengthCreator(10)]}
                           component={TextArea} />
                </div>
                <div>
                    <button>AddPost</button>
                </div>

            </form>
    )

}


MyPostForm = reduxForm({form: 'postMessageForm'})(MyPostForm);


export default MyPostForm