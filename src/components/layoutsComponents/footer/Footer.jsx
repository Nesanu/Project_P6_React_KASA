import Logo from "../../../assets/images/logo/LOGO_WHITE.png";
import styles from "./Footer.module.scss";

/**
 * Footer est le bas de page de mon application
 * @returns {JSX.Element} - Le bas de page de l'application
 * @example
 * <Footer />
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={Logo} alt="Kasa" />
      <em>&copy; 2020 Kasa. All rights reserved</em>
    </footer>
  );
};
export { Footer };