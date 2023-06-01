import {UserAPI} from "../api/UserAPI";
import {UserType} from "../../types/types";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_FETCHING = 'SET-FETCHING'


let initialize = {
    users: [] as Array<UserType>,
    pageSize: 2 as number,
    totalUsers: 201 as number,
    currentPage: 1 as number,
    isFetching: true as boolean,
    fake: 10 as number
}


const usersReducer = (state = initialize, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        u.followed = true;
                        return {...u}
                    }
                    return u;
                })
            }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        u.followed = false;
                        return {...u}
                    }
                    return u;
                })
            }

        }
        case SET_USERS: {
            return {...state, users: action.users}
        }

        case SET_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }


        default:
            return state;
    }
}


type followActionType = {
    type: typeof FOLLOW
    userId: number

}

export const followAction = (userId: number): followActionType => ({type: FOLLOW, userId});

type unfollowActionType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowAction = (userId: number): unfollowActionType => ({type: UNFOLLOW, userId});

type setUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}

export const setUsers = (users: Array<UserType>): setUsersActionType => ({type: SET_USERS, users});

type setIsFetchingActionType = {
    type: typeof SET_FETCHING
    isFetching: boolean
}
export const setIsFetching = (isFetching: boolean): setIsFetchingActionType => ({type: SET_FETCHING, isFetching});


export const getUsers = () => {
    return (dispatch) => {
        UserAPI.getUsers().then(data => {
            dispatch(setUsers(data.items))
        })
    }
}


export const follow = (userId: any) => {
    return (dispatch) => {
        UserAPI.setFollow(userId).then(r => {
            dispatch(followAction(userId))
        })
    }
}


export const unFollow = (userId) => {
    return (dispatch) => {
        UserAPI.setUnfollow(userId).then(r => {
            dispatch(unfollowAction(userId))
        })
    }
}


export default usersReducer;