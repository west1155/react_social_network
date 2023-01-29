import React from "react";
import s from './Header.module.css';

const Header = () => {
    return(
        <header className={s.header}>
            <a href="#default" className={s.logo}>CompanyLogo</a>
            <div className={s.headerRight}>
                <a className={s.active} href="#home">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </header>
    );

}


export default Header;