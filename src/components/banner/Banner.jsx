import './Banner.scss';
import BannerHome from "/src/assets/images/background-images/bg-home-title.webp";
import BannerAbout from "/src/assets/images/background-images/about-intro.png"; 
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';


const bannerImages = {
    home: BannerHome,
    about: BannerAbout
  };

/**
 * @descriptif : ELEMENT JSX  Générique
 * @Params
 *  - Texte : Facultatif
 *  - Image : Soit Banner Home ou Banner About
 * @Résultat : Nous retourneras un élément jsx avec un choix d'image et une possibilité de texte centré sur ce même composant 
 * @exemple :
 * <Banner text="Bienvenue sur notre site" bannerType="home" />
 * <Banner bannerType="about" />
 **/
export function Banner({ text, bannerType  }) {

    const [bgImg, setBgImg] = useState('');

    useEffect(() => {
        // Vérifie si le type de bannière existe dans notre "enum"
        const image = bannerImages[bannerType] || '';
        setBgImg(`url(${image})`);
      }, [bannerType]);

    return (
        <div className="homeTitleContainer" style={{backgroundImage: bgImg}}>
            {text && <h2>{text}</h2>}
        </div>
    )
}

Banner.propTypes = {
    text: PropTypes.string,
    bannerType: PropTypes.oneOf(['home', 'about']).isRequired
  };