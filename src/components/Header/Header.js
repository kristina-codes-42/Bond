import React from "react";
import './Header.css'
import gun from '../Images/gun.png';
import target from '../Images/target.png';

const Header = (props) => {
    
    return (
        <header className="header">
            <img src={gun} alt="gun" className="header__image header__image--gun" />
            <h1 className="header__main-heading">007 James Bond</h1>
            <img src={target} alt="scope target" className="header__image header__image--target" />
        </header>
    );
};

export default Header;