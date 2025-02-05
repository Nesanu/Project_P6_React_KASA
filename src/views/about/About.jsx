import './style.scss';
import { Banner } from '../../components/banner/banner';

/**
 * @description URL Localhost:PORT/about
 * @return Composant JSX de la vue About
 */
export function About() {
    return (
        <Banner bannerType="about"/>
    )
}