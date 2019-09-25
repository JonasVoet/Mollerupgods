import React from 'react';
import { NavLink, withRouter } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink exact to="/">Velkommen</NavLink>
                </li>

                <li>
                    <NavLink exact to="/ballet">Verdensballetten</NavLink>
                </li>

                <li>
                    <NavLink exact to="/news">Nyheder</NavLink>
                </li>

                <li>
                    <NavLink exact to="/events">Events og mødefaciliteter</NavLink>
                </li>

                <li>
                    <NavLink exact to="/customers">Hvad siger vores gæster</NavLink>
                </li>

                <li>
                    <NavLink exact to="/about">Om Møllerup Gods</NavLink>
                </li>

                <li>
                    <NavLink exact to="/contact">Kontakt os</NavLink>
                </li>

                <li>
                    <NavLink exact to="/webshop">Webshop</NavLink>
                </li>
            </ul>

        </nav>
    );
};

export default withRouter(NavBar);