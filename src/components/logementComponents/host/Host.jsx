// import React from "react";
import styles from "./Host.module.scss";

import PropTypes from "prop-types";

Host.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
};

const Host = ({ name, picture }) => {
  return (
    <div className={styles.owner}>
      <p>{name}</p>
      <img src={picture} alt="Owner" />
    </div>
  );
};

export default Host;