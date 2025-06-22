
import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import styles from './NavLink.module.css';

const NavLink = ({ label, to }) => {
  return (
    <RouterNavLink
      to={to}
     
      className={({ isActive }) =>
        `${styles.baseNavLink} ${isActive ? styles.activeLink : styles.inactiveLink}`
      }
    >
      {label}
    </RouterNavLink>
  );
};

export default NavLink;