import React from 'react';
import { Link } from "react-router-dom";

const NavBarLS = () => {
    return (
        <div className="NAVBAR-L-S">
            <div className="NAVBAR-LOGO">
                <Link to="/" className="NAVBAR-LINK">
                    <h1>LOGO</h1>
                </Link>
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
    );
}

export default NavBarLS;