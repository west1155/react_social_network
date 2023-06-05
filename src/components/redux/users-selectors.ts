import {createSelector} from "selector";
import {AppStateType} from "./redux-store";

export const getUsersState = (state: AppStateType) => {
    return state.usersPage.users
}

export const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users.filter(u => true);
}

export const getUsersSuperSelector = createSelector( getUsersState, (users) => {
    return users.filter(u => true)
})

export function getPageSize(state: AppStateType) {
    return state.usersPage.pageSize
}
export function getTotalUsers(state: AppStateType) {
    return state.usersPage.totalUsers
}
export function getCurrentPage(state: AppStateType) {
    return state.usersPage.currentPage
}

