import "./style.scss";
import { Banner } from "../../components/banner/banner";
import Gallery from "../../components/gallery/Gallery";

/**
 * @URL : Localhost:PORT/
 * @description Composant JSX pour la vue 'Home'
 * @return : JSX Component
 */
export function Home() {
  return (
    <div className="homeContainer">
      <Banner text={"Chez vous, partout et ailleurs"} bannerType="home" />
      <Gallery />
      {/* 
          TODO Crée un composant Logements 
          - Dans ce composant on doit pouvoir boucler sur une liste d'élément 
          - Ces éléments sont des composants enfant ( logement )
        */}
    </div>
  );
}


