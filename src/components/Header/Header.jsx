import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ActiveLink from '../ActiveLink/ActiveLink';


const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <ActiveLink to="/Friends">Friends</ActiveLink>
            <Link to="/Post">Post</Link>
            <Link to="/about">about</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Header;