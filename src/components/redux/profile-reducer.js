import {ProfileAPI, UserAPI} from "../api/UserAPI";
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS'

let initialize = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialize, action) => {

    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.postMessage,
                likesCount: 20
            }

            return {...state, posts: [...state.posts, newPost]}
        }


        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }


        case SET_STATUS: {
            return {...state, status: action.status}
        }


        default:
            return state;
    }


}


export const addPostActionCreator = (postMessage) => ({type: ADD_POST, postMessage});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_STATUS, status})


export const getUserProfile = (userId) =>
    (dispatch) => {
        UserAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }



export const getUserStatus = (userId) => (dispatch) => {
        ProfileAPI.getStatus(userId)
            .then(response => {
                dispatch(setUserStatus(response.data))
            })
    }


export const updateUserStatus = (status) => (dispatch) => {
        ProfileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                }
            })
    }


export default profileReducer;
