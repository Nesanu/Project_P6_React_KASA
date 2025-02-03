// import React from "react";
import styles from "./CardLogement.module.scss";
import { Link } from "react-router-dom";

// const logement = {
//     id: "1",
//     cover: "path/to/image.jpg",
//     title: "Beautiful Apartment"
// };


// import PropTypes from 'prop-types';

// logement.propTypes = {
//     text: PropTypes.node.isRequired,
// };

import PropTypes from 'prop-types';

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