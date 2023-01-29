import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    usersPage: usersReducer,
    dialogsPage: dialogReducer,
    profilePage: profileReducer
})

let store = createStore(reducers);


window.store = store;

export default store;