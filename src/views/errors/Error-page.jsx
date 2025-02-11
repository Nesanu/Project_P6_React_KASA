import styles from "./Error-pages.module.scss";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <section className={styles.errorPage}>
      <h1 className={styles.errorTitle}>{error.status}</h1>

      <p className={styles.errorMessage}>
        Oups! La page que vous demandez n&apos;existe pas. Veuillez vérifier
      </p>
      <Link to="/" className={styles.errorRedirection}>
        Retourner sur la page d&apos;accueil
      </Link>
    </section>
  );
}
