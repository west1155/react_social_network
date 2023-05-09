import React from "react";
import s from './Profile.module.css'
import Preloader from "../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {


    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.content}>
            <div className={s.describtionBlock}>
                <img src={props.profile.photos.large} alt={""}></img>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
            <div>Fullname: {props.profile.fullName}</div>
            <div>AboutMe: {props.profile.aboutMe}</div>
            <div>Contacts:
                <div>Facebook: {props.profile.contacts.facebook}</div>
                <div>GitHub: {props.profile.contacts.github}</div>
                <div>Looking for a job: {(props.profile.lookingForAJob).toString}</div>
            </div>
        </div>
    );
}

export default ProfileInfo;