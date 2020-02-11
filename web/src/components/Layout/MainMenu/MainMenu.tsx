import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainMenu.scss';

function MainMenu() {
    return (
        <aside className="menu">
            <p className="menu-label">General</p>
            <ul className="menu-list">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/">Dashboard</NavLink>
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
            </ul>
        </aside>
    );
}

export default MainMenu;
