import {ProfileAPI, UserAPI} from "../api/UserAPI";
import {PostType, ProfilePageType, ProfileType} from "../../types/types";
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS'




let initialize = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ""
}

const profileReducer = (state = initialize, action: any): ProfilePageType => {

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

type addPostActionCreatorType = {
    type: typeof ADD_POST,
    postMessage: string
}
export const addPostActionCreator = (postMessage): addPostActionCreatorType  => ({type: ADD_POST, postMessage});

type setUserProfileType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}
export const setUserProfile = (profile): setUserProfileType => ({type: SET_USER_PROFILE, profile})

type setUserStatusType = {
    type: typeof SET_STATUS,
    status: string
}
export const setUserStatus = (status): setUserStatusType => ({type: SET_STATUS, status})


export const getUserProfile = (userId: number) =>
    (dispatch: any) => {
        UserAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }



export const getUserStatus = (userId: number) => (dispatch: any) => {
        ProfileAPI.getStatus(userId)
            .then(response => {
                dispatch(setUserStatus(response.data))
            })
    }


export const updateUserStatus = (status: string) => (dispatch: any) => {
        ProfileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                }
            })
    }


export default profileReducer;
