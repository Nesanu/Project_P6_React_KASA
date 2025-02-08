// import Header from './Header'; Peut-on importer le composant Header de cette manière?
// import Footer from './Footer'; Peut-on importer le composant Header de cette manière?

import styles from './Error-pages.module.scss';
// import styles from "./error-pages.module.scss";
import { Link, useRouteError } from 'react-router-dom';
// import { Header } from "../../components/layoutsComponents/header/Header";
// import { Footer } from "../../components/layoutsComponents/footer/Footer";


export default function ErrorPage() {
    const error = useRouteError();
    return (
        <section className={styles.errorPage}>
            {/* <Header /> */}
            <h1 className={styles.errorTitle}>{error.status}</h1>
            {/* <h1 className={styles.errorTitle}>404</h1> */}
            <p className={styles.errorMessage}>Oups! La page que vous demandez n&apos;existe pas.</p>
            {error.data}
            <Link to="/" className={styles.errorRedirection}>
                Retourner sur la page d&apos;accueil
            </Link>
            {/* <Footer /> */}
        </section>
    );
}


