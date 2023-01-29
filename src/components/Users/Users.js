import React from "react";
import s from './Users.module.css'


const Users = (props) => {

    let users = props.users
    window.users = users

    let names = props.users.map (n => <div className={s.profile_page} key={n.id}>
        <span>
            <div>
                <img className={s.profile_photo}
                     src="https://www.shutterstock.com/image-vector/donkey-shrek-icon-funny-cartoon-600w-2156476755.jpg"
                alt="logo">
                </img>
            </div>
            <div>
                {
                    n.followed ?
                        <button onClick={ () => {props.setUnfollow(n.id)} }> Unfollow </button> :
                        <button onClick={ () => {props.setFollow(n.id)} }> Follow </button>
                }
            </div>
        </span>
        <span>
            <span>
                <div>{n.fullName}</div>
                 <div>{n.status}</div>
            </span>
            <span>
                <div>{n.location.country}</div>
                <div>{n.location.city}</div>

            </span>
        </span>
    </div> )

    return <div>
        {names}
    </div>

}


export default Users;