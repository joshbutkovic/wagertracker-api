import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './MainMenu.scss';

function MainMenu() {
    let history = useHistory();

    const handleClick = () => {
        history.push('/');
    };

    return (
        <aside className="menu">
            <p className="menu-label">General</p>
            <ul className="menu-list">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
            </ul>
            <p className="menu-label">User Account</p>
            <ul className="menu-list">
                <li>
                    <NavLink to="/registration">Sign Up</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li onClick={handleClick}>
                    <a>Sign Out</a>
                </li>
            </ul>
        </aside>
    );
}

export default MainMenu;
