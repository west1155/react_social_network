export type PostType = {
    id: number,
    message: string,
    likesCount: number
}


export type ProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: null,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: null,
        github: string,
        mainLink: null
    }, lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }

}


export type ProfilePageType = {
    posts: Array<PostType>,
    profile: any,
    status: string
}


export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
}


export type MapStatePropsType = {
    users: Array<UserType>

}

export type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    getUsers: () => void
}


export type MyMeReturnTypes = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: number
    messages: Array<string>


}


export type LoginReturnTypes = {
    data: {
        userId: number
    }
    resultCode: number
    messages: Array<string>
}


export type LogoutReturnTypes = {
    data: {}
    resultCode: number
    messages: Array<string>
}