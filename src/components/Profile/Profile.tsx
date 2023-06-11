import React, {useEffect, useState} from "react";
import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {useDispatch} from "react-redux";
import {getUserProfile} from "../redux/profile-reducer";
import store from "../redux/redux-store";
import {useParams} from "react-router-dom";


const Profile = (props) => {


    const dispatch: any = useDispatch()


    const [profile, setProfile] = useState(null)




    useEffect(() => {
        const fetchData = async () => {
            dispatch(getUserProfile(2))
            setProfile(store.getState().profilePage.profile)
        };

        fetchData();

    }, [dispatch]);

    return (
        <div>
            <ProfileInfo  profile={profile}/>
            <MyPostsContainer />


        </div>

    );

}

export default Profile;