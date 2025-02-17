import "./IntroContainer.scss"; // Style en module via un nommage d'import 'styles' le nom style est pas définitif (ex. css, class etc.. )
import aboutPicture from "../../assets/images/background-images/about-intro.png";
import { About } from "../../views/about/About";

/**Documentation de méthode
 * @module IntroContainer
 * @description
 * Ce composant permet de créer un container pour la page about
 */
const IntroContainer = () => {
  return (
    <div className="IntroContainer">
      <img src={aboutPicture} alt="paysage de montagne vallonné" />
      <About />
    </div>
  );
};

export default IntroContainer;
