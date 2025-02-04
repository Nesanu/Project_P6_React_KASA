// import React from "react";
import Logo from "../../../assets/images/logo/LOGO_WHITE.png";
import styles from "./Footer.module.scss";
// import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={Logo} alt="Kasa" />
      <em>&copy; 2020 Kasa. All rights reserved</em>
    </footer>
  );
};

export default Footer;