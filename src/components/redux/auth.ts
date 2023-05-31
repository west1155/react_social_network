import {AuthAPI} from "../api/UserAPI";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';

export type InitialStateType = {   // Type for state
    login: string | null
    email: string | null
    id: number | null
    isAuth: boolean
}

let initialize: InitialStateType = {
    login: null,
    email: null,
    id: null,
    isAuth: false,
}

const authReducer = (state:InitialStateType = initialize, action): InitialStateType => {

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


type setUserData = {
    userId: number
    login: string
    email: string
}


type setUserDataActionType = {
    type: typeof SET_USER_DATA
    data: setUserData
}


export const setUserData = (userId, login, email): setUserDataActionType => ({type: SET_USER_DATA, data: {userId, login, email}})

export const getAuthUserData = () => (dispatch: any) => {
    AuthAPI.me()
        .then(r => {
            if (r.data.resultCode === 0)
                dispatch(setUserData(r.data.data.id, r.data.data.login, r.data.data.email))
        });
}


export const login = (email: string, password: string, rememberMe:boolean = false) => {
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

export const logout = () => (dispatch: any) => {
    AuthAPI.logOut()
        .then(r => {
            if (r.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        });
}
export default authReducer;