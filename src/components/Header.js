import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
    <nav>
        <h1> Expensify </h1>
        <ol>
        <li><NavLink to="/" activeClassName="is-active" exact={true} > Home </NavLink></li>
        <li><NavLink to="/create" activeClassName="is-active" > create </NavLink></li>
        <li><NavLink to="/help" activeClassName="is-active" > help </NavLink></li>
        </ol>
    </nav>
        
    </header>
);

export default Header;