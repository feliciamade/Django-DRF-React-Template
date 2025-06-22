import React from 'react';
import CustomNavLink from '../NavLink';
import styles from './NavBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faCode } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <nav className={styles.mainNav}>
      <div className={styles.navLeft}>
        <h2>Girl Bytes</h2>
      </div>

      <div className={styles.navCenter}>
        <CustomNavLink label="Home" to="/" />
        <CustomNavLink label="Contact" to="/contact" />
        <CustomNavLink label="Mission" to="/mission" />
      </div>

      <div className={styles.navRight}>
        <FontAwesomeIcon icon={faComment} />
        <FontAwesomeIcon icon={faCode} />
      </div>
    </nav>
  );
};

export default NavBar;