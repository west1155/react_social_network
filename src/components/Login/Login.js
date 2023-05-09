import React from 'react'
import {useFormik} from "formik";
import s from './Login.module.css'
import {login} from "../redux/auth";
import {connect} from "react-redux";

const Login = (props) => {


    const Login = useFormik({
        initialValues: {
            login: "",
            password: "",
        }, onSubmit: (values) => {
            props.login(values.login, values.password)
        }
    })

    return <div>
        <form onSubmit={Login.handleSubmit}>
            <div className={"input-container"}>
                <input
                    className={s.text_area}
                    id={"login"}
                    type={"text"}
                    placeholder={"username"}
                    onChange={Login.handleChange}
                    onBlur={Login.handleBlur}
                    value={Login.values.login}
                />
            </div>
            <div>
                <input
                    className={s.text_area}
                    id={"password"}
                    placeholder={"password"}
                    type={"text"}
                    onChange={Login.handleChange}
                    value={Login.values.password}
                />
            </div>
            <div>
                <button type={"submit"}>login</button>
            </div>
            {props.error &&
                <div className={s.error}>{props.error}</div>
            }

        </form>
    </div>
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)
