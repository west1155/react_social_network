import s from "./Users.module.css";
import React from "react";
import {NavLink} from "react-router-dom";


const Users = (props) => {


    let totalPages = Math.ceil(props.totalUsers / props.pageSize);
    let pages = []
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }




    return <div>
        <div>
            {pages.map((p => <span className={p === props.currentPage && s.selected}
                                   onClick={(e) => {
                                       props.onPageChange(p)
                                   }}>{p}</span>))}
        </div>
        {props.users.map(u => <div key={u.id}>
            <div>
                <NavLink to={"/profile"}>
                    <img className={s.profile_photo}
                         src="https://www.shutterstock.com/image-vector/donkey-shrek-icon-funny-cartoon-600w-2156476755.jpg"
                         alt="logo">
                    </img>
                </NavLink>
            </div>
            <div>
                {u.followed ?
                    <button onClick={() => {
                        props.setUnfollow(u.id)
                    }}>Unfollow</button> :

                    <button  onClick={() => {
                        props.setFollow(u.id)
                    }}> Follow </button>}
            </div>
            <span>
                <div>{u.name}</div>
                 <div>{u.status}</div>
            </span>
        </div>)}
    </div>


}


export default Users;