// import React from "react";
import styles from "./CardLogement.module.scss";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

// const logement = {
//     id: "1",
//     cover: "path/to/image.jpg",
//     title: "Beautiful Apartment"
// };


// Version essai: import PropTypes from 'prop-types';

// logement.propTypes = {
//     text: PropTypes.node.isRequired,
// };

/**Documentation de méthode 
   * @description
   * Ce composant représente une carte de logement.
   * @param {string} id - L'identifiant du logement.
   * @param {string} title - Le titre du logement.
   * @param {string} cover - L'image de couverture du logement.
   * @returns {JSX.Element} - Une carte de logement.
   * @example
   * <Card id="1" title="Beautiful Apartment" cover="path/to/image.jpg" />
   * @example
   * <Card id="2" title="Beautiful House" cover="path/to/image.jpg" />
    */

CardLogement.propTypes = {
    logement: PropTypes.shape({
        id: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};
const CardLogement = ({ logement }) => {
  return (
    <article>
      <Link to={`logement/${logement.id}`}>
        <div className={styles.shadow}></div>
        <img src={logement.cover} alt={logement.title} />
        <h3>{logement.title}</h3>
      </Link>
    </article>
  );
};

export default CardLogement;