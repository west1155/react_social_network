import {UserAPI} from "../api/UserAPI";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS = 'SET-TOTAL-USERS'
const SET_FETCHING = 'SET-FETCHING'

let initialize = {
    users: [],
    pageSize: 5,
    totalUsers: 21,
    currentPage: 1,
    isFetching: true,
}


const usersReducer = (state = initialize, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
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

export const followAction = (userId) => ({type: FOLLOW, userId});
export const unfollowAction = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalUsers = (totalUsers) => ({type: SET_TOTAL_USERS, totalUsers});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setIsFetching = (isFetching) => ({type: SET_FETCHING, isFetching});


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