import profileReducer, {addPostActionCreator} from "./profile-reducer"
import React from "react";


import axios from "axios";


const instance = axios.create(
    {
        withCredentials: true,
        headers: {"API-KEY": "71e42ccf-31f9-47d5-83be-d2a9cce7d6da"},
        baseURL: "https://social-network.samuraijs.com/api/1.0/"
    })


test("should be added new post", () => {
    // 1. test data
    let action = addPostActionCreator("test text");
    let state = {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 11},
            {id: 3, message: "Blabla", likesCount: 11},
            {id: 4, message: "Dada", likesCount: 11},
        ],
    };

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(5);
});