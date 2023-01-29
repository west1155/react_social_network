import React from "react";
import s from './Profile.module.css'


const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div>
                <img className='imagetop'
                     src='https://img.freepik.com/premium-photo/hi-tech-digital-display-holographic-information-abstract-background_24070-563.jpg'
                     width="40%" height="5%"
                     alt=''/>
            </div>
            <div>avatar + descrbtion</div>
        </div>
    );
}

export default ProfileInfo;