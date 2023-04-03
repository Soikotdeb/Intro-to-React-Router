import React from 'react';
import './ActiveLink.css'
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children}) => {
    return (
        <NavLink
        to={to}
        className={({ isActive }) =>isActive ? "active" : ""}
      >
        {children}
        {/* other code */}
      </NavLink>
    );
};

export default ActiveLink;