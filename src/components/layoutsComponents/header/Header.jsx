// import React from "react";
import Logo from "../../../assets/images/logo/LOGO_GRAND.png";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

/**
 * @description : Partie du header 
 * @utilité : sert a me retourné un composant jsx qui comprend une navigation (via des nav link) [link](https://blbla.fr)
 */
export function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo de Kasa" className={styles.logo} aria-label="Logo de Kasa" />
      <nav className={styles.navigation} aria-label="Navigation principale">
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>
              Accueil
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : "")}>
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

