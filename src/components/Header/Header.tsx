import React from "react";
import s from './Header.module.css';


const Header = (props) => {

    function logout () {
        props.logout()

    }
    return (
        <header className={s.header}>
            <a href="#default" className={s.logo}>CompanyLogo</a>
            <div className={s.headerRight}>
                <a className={s.active} href="#home">Home</a>

                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
            <div>
                {(props.isAuth) ? props.login : null }
                <button onClick={logout}>Logout</button>

            </div>


        </header>
);

}


export default Header;