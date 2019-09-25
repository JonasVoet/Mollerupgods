import React from 'react';
import NavBar from './NavBar';
import Logo from '../../assets/img/logo.png';
import '../header/header.scss';

const Header = () => {
    return (
        <div className="header-container">
            <header>
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>

                <NavBar />
            </header>
        </div>
    )
}

export default Header
