import React from 'react';
import "./navBar.css";
import NavBarMenu from './NavBarMenu';
import NavBarLS from './navbar-logo-searchbar';
import NavBarSM from './navbar-SM';

const NavBar = () => {
    const menu = ['CATEGORIES', 'NEWS', 'PROMOTIONS', 'BLOG'];
    const CATEGORIES = ["maryoul", "srwel", "klaset", "maryoul 5al3a"];
    return (
        <nav className="NAVBAR-MAIN navbar navbar-expand-lg">
            <NavBarSM />
            <NavBarLS />
            <NavBarMenu menu={menu} menuDropDown={CATEGORIES} />
        </nav>
    );
}

export default NavBar;