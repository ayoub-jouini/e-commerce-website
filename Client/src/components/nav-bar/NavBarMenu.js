import React from 'react';
import NavBarDropdown from './NavBarDropdown';
import { Link } from "react-router-dom";

const NavBarMenu = ({ menu, menuDropDown }) => {
    return (
        <div className="NAVBAR-MENU">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="NAVBAR-MENU-LIST navbar-nav me-auto mb-2 mb-lg-0">
                    {menu.map((e, key) => {
                        if (e === 'CATEGORIES') {
                            return (
                                <li className="nav-item dropdown" key={key}>
                                    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {e}
                                    </a>
                                    <NavBarDropdown dropDown={menuDropDown} />
                                </li>
                            );
                        }
                        else {
                            return (
                                <Link to={`/${e}`} key={key} className="NAVBAR-LINK">
                                    <li key={key} className="nav-item">
                                        <a className="nav-link" href="#">{e}</a>
                                    </li>
                                </Link>
                            );
                        }
                    })}
                </ul>
            </div>
        </div>
    );
}

export default NavBarMenu;