import {AuthAPI} from "../api/UserAPI";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';

let initialize = {
    login: null,
    email: null,
    id: null,
    isAuth: false,
}

const authReducer = (state = initialize, action) => {

    switch (action.type) {


        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        }

        default:
            return state;
    }
}

export const setUserData = (userId, login, email) => ({type: SET_USER_DATA, data: {userId, login, email}})

export const getAuthUserData = () => (dispatch) => {
    AuthAPI.me()
        .then(r => {
            if (r.data.resultCode === 0)
                dispatch(setUserData(r.data.data.id, r.data.data.login, r.data.data.email))
        });
}


export const login = (email, password, rememberMe = false) => {
    return (dispatch) => {
        AuthAPI.login(email, password, rememberMe)
            .then(r => {
                if (r.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {
                    dispatch(stopSubmit("login", {_error: "Email or password wrong"}))
                }
            });
    }
}

export const logout = () => (dispatch) => {
    AuthAPI.logOut()
        .then(r => {
            if (r.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        });
}
export default authReducer;