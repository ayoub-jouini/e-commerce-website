import React from 'react';
import { Link } from "react-router-dom";

const NavBarDropdown = ({ dropDown }) => {
    return (
        <ul className="NAVBAR-MENU-DROPDOWN dropdown-menu" aria-labelledby="navbarDropdown">
            {dropDown.map((d, key) => {
                return (
                    <Link to={`/${d}`} key={key} className="NAVBAR-LINK">
                        <li><a className="dropdown-item">{d}</a></li>
                    </Link>
                )
            })}

        </ul>
    );
}

export default NavBarDropdown;