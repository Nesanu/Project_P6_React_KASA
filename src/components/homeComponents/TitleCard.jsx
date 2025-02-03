

// import React, { ReactNode, memo } from "react";

import styles from "./TitleCard.module.scss";

// TitleCardProps {
//   text: ReactNode;
// }

import PropTypes from 'prop-types';

TitleCard.propTypes = {
    text: PropTypes.node.isRequired,
};
const TitleCard = ({ text }) => {
  return (
    <div className={styles.homeTitleContainer}>
      <h2>{text}</h2>
    </div>
  );
};

export default TitleCard;