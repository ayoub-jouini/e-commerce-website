import React from 'react';
import "./navBar.css";
import NavBarMenu from './NavBarMenu';

const NavBar = () => {
    const menu = ['CATEGORIES', 'NEWS', 'PROMOTIONS', 'BLOG'];
    const CATEGORIES = ["maryoul", "srwel", "klaset", "maryoul 5al3a"];
    return (
        <nav className="NAVBAR-MAIN navbar navbar-expand-lg">
            <div className="NAVBAR-SM">
                <img src="./asset/icons/facebook.svg" />
                <img src="./asset/icons/instagram.svg" />
                <img src="./asset/icons/twitter.svg" />
                <img src="./asset/icons/youtube.svg" />
                <img src="./asset/icons/whatsapp.svg" />
            </div>
            <div className="NAVBAR-L-S">
                <div className="NAVBAR-LOGO">
                    <h1>LOGO</h1>
                </div>
                <div className="NAVBAR-SEARCHBAR">
                    <form>
                        <input type="text" id="NAVBAR-SEARCHBAR-INPUT" placeholder="Search" />
                    </form>

                </div>

                <div className="NAVBAR-CART">
                    <img src="./asset/icons/shopping-cart.svg" />

                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <img src="./asset/icons/menu.svg" />
                </button>
            </div>
            <NavBarMenu menu={menu} menuDropDown={CATEGORIES} />
        </nav>
    );
}

export default NavBar;