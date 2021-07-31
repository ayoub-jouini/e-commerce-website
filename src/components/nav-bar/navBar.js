import React from 'react';
import "./navBar.css";
import NavBarMenu from './NavBarMenu';
import NavBarLS from './navbar-logo-searchbar';
import NavBarSM from './navbar-SM';
import useFetch from '../../services/useFetch';
import LoadingSpinner from '../loading-spinner/LoadingSpiner';

const NavBar = () => {
    const menu = ['CATEGORIES', 'NEWS', 'PROMOTIONS', 'BLOG'];
    const { data, error, loading } = useFetch('./category-Data.json');
    if (error) throw error;
    if (loading) return <LoadingSpinner />
    const CATEGORIES = data.category;
    return (
        <nav className="NAVBAR-MAIN navbar navbar-expand-lg">
            <NavBarSM />
            <NavBarLS />
            <NavBarMenu menu={menu} menuDropDown={CATEGORIES} />
        </nav>
    );
}

export default NavBar;