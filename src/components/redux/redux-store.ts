import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import authReducer from "./auth";
import appReducer from "./app-reducer.ts";


type reducersType = typeof reducers
export type AppStateType = ReturnType<reducersType>
let reducers = combineReducers({
    usersPage: usersReducer,
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    form: formReducer,
    auth: authReducer,
    app: appReducer
})


let store = createStore(reducers, applyMiddleware(thunk));
window.store = store
export default store;