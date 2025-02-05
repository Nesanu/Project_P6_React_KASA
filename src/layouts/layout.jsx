import PropTypes from "prop-types";
import './layout.scss';
import { Header } from "../components/layoutsComponents/header/Header";
import { Footer } from "../components/layoutsComponents/footer/Footer";


/**
 * Le layout sert à englober ces enfants (via les childrens)
 * Dans notre cas ici il affiche de manière permanente les éléments suivant
 * Header -> Bar de navigation + Titre de l'application web
 * Footer -> Bas de page avec les informations concernant l'application ( Ex. Copyright )
 */
export function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
