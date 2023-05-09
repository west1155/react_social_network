import React from "react";
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";



const NavBar = (props) => {
    return <nav className={s.nav}>
        <div className={s.item}><NavLink to="/profile">Profile</NavLink></div>
        <div className={s.item}><NavLink to="/dialogs">Messages</NavLink></div>
        <div className={s.item}><NavLink to="/users">Users</NavLink></div>
        <div className={s.item}>News</div>
        <div className={s.item}>Music</div>
        <div className={s.item}>Settings</div>
    </nav>
}


export default NavBar;