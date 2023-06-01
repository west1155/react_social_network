import {createSelector} from "selector";

export const getUsersState = (state) => {
    return state.usersPage.users
}

export const getUsersSelector = (state) => {
    return state.usersPage.users.filter(u => true);
}

export const getUsersSuperSelector = createSelector( getUsersState, (users) => {
    return users.filter(u => true)
})

export function getPageSize(state) {
    return state.usersPage.pageSize
}
export function getTotalUsers(state) {
    return state.usersPage.totalUsers
}
export function getCurrentPage(state) {
    return state.usersPage.currentPage
}

