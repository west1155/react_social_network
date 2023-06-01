import axios from "axios";


const instance = axios.create(
    {
        withCredentials: true,
        headers: {"API-KEY": "71e42ccf-31f9-47d5-83be-d2a9cce7d6da"},
        baseURL: "https://social-network.samuraijs.com/api/1.0/"
    })


export const UserAPI = {
    getUsers() {
        return instance.get(`users?page=${1}&count=${100}`)
            .then(r => {
                return r.data
            });

    },


    setFollow(userId) {
        return instance.post(`follow/${userId}`, {})
    },

    setUnfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },


    getProfile(userId) {
        console.warn("Outside method shopuld be used")
        return ProfileAPI.getProfile(userId)
    }

}


export const ProfileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },

    getStatus(userId) {
        return instance.get( `profile/status/` + userId)
    },

    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status})
    }

}



export const AuthAPI = {
    me() {
        return(
        instance.get(`auth/me/`))
    },

    login(email, password, rememberMe) {
       return(
           instance.post(`auth/login/`, {email, password, rememberMe})
       )
    },

    logOut () {
        return(
            instance.delete(`auth/login/`)
        )
    }



}


