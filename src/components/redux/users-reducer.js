const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialize = {
    users:
        [
            {id: 1, name: 'Dimych', followed: true, status: 'boss', location: {city: 'London', country: 'UK'}},
            {id: 2, name: 'Aleksandr', followed: false, status: 'boss', location: {city: 'London', country: 'UK'}},
            {id: 3, name: 'Aliona', followed: true, status: 'creator', location: {city: 'London', country: 'UK'}},
            {id: 4, name: 'Eugene', followed: false, status: 'nope', location: {city: 'London', country: 'UK'}}
        ]

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
            return  {
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
            return {...state, users: [...state.users, action.users]}
        }
        default:
            return state;
    }
}

    export const followActionCreator = (userId) => ({type: FOLLOW, userId});
    export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});
    export const setUsersActionCreator = (users) => ({type: SET_USERS, users})


    export default usersReducer;