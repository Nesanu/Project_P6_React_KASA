import "./Host.scss";
import PropTypes from "prop-types";

Host.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
};

  /**Documentation de méthode 
   * @description
   * Ce composant permet d'afficher le nom et la photo de l'hôte.
   * @param {string} name - Le nom de l'hôte.
   * @param {string} picture - La photo de l'hôte.
   * @returns {JSX.Element} - Le nom et la photo de l'hôte.
   * @example
   * <Host name="Jean Dupont" picture="path/to/image.jpg" />
   * @example
   * <Host name="Marie Dupont" picture="path/to/image.jpg" />
    */

const Host = ({ name, picture }) => {
  return (
    // <div className={styles.owner}>
       <div className="owner">
      <p>{name}</p>
      <img src={picture} alt="Owner" />
    </div>
  );
};

export default Host;