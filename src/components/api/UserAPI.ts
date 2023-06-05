import axios, {AxiosInstance} from 'axios';
import {LoginReturnTypes, LogoutReturnTypes, MyMeReturnTypes, UserType} from "../../types/types";

const instance: AxiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "71e42ccf-31f9-47d5-83be-d2a9cce7d6da"},
    withCredentials: true,
} as any)   // will check later, AxiosRequestConfig?



export const UserAPI = {
    getUsers() {
        return instance.get<Array<UserType>>(`users?page=${1}&count=${100}`)
            .then(r => {
                return r.data
            });

    },


    setFollow(userId: number) {
        return instance.post<boolean>(`follow/${userId}`, {})
    },

    setUnfollow(userId: number) {
        return instance.delete<boolean>(`follow/${userId}`)
    },


    getProfile(userId: number) {
        console.warn("Outside method shopuld be used")
        return ProfileAPI.getProfile(userId)
    }

}


export const ProfileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
    },

    getStatus(userId: number) {
        return instance.get( `profile/status/` + userId)
    },

    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status})
    }

}



export const AuthAPI = {
    me() {
        return(
        instance.get<MyMeReturnTypes>(`auth/me/`))
    },

    login(email: string, password: string, rememberMe: boolean) {
       return(
           instance.post<LoginReturnTypes>(`auth/login/`, {email, password, rememberMe})
       )
    },

    logOut () {
        return(
            instance.delete<LogoutReturnTypes>(`auth/login/`)
        )
    }


}


