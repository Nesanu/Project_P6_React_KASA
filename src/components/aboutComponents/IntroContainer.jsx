// import React from "react";
import styles from "./IntroContainer.module.scss";
import aboutPicture from "../../assets/images/background-images/about-intro.png";
import { About } from "../../views/about/About";

const IntroContainer = () => {
  return (
    <div className={styles.introContainer}>
      <img src={aboutPicture} alt="paysage de montagne vallonné" />
	  <About />
    </div>
  );
};

export default IntroContainer;