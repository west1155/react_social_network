import {UserAPI} from "../api/UserAPI";
import {UserType} from "../../types/types";
import {number} from "yup";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS = 'SET-TOTAL-USERS'
const SET_FETCHING = 'SET-FETCHING'
const test = 'test'

let initialize = {
    users: [] as Array<UserType>,
    pageSize: 5 as number,
    totalUsers: 21 as number,
    currentPage: 1 as number,
    isFetching: true as boolean,
    fake: 10 as number
}


const usersReducer = (state = initialize, action) => {
    switch (action.type) {

        case test:
            return {
                ...state,
                fake: state.fake
            }
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

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.page}
        }

        case SET_TOTAL_USERS: {
            return {...state, totalUsers: action.totalUsers}
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

type setTotalUsersActionType = {
    type: typeof SET_TOTAL_USERS
    totalUsers: number
}

export const setTotalUsers = (totalUsers: number): setTotalUsersActionType => ({type: SET_TOTAL_USERS, totalUsers});


type setCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    page: number
}

export const setCurrentPage = (page: number): setCurrentPageActionType => ({type: SET_CURRENT_PAGE, page});


type setIsFetchingActionType = {
    type: typeof SET_FETCHING
    isFetching: boolean
}
export const setIsFetching = (isFetching: boolean): setIsFetchingActionType => ({type: SET_FETCHING, isFetching});


export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {


        dispatch(setIsFetching(true));

        UserAPI.getLength().then(data => {
            dispatch(setTotalUsers(data.items.length));
        });

        UserAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setIsFetching(false));
        })

    }
}


export const follow = (userId) => {
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