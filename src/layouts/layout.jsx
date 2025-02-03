import PropTypes from 'prop-types';

export function Layout({children}) {
    return (
        <>
            {/* <header>
                    <h1>MON APPLICATION</h1>
                    <nav>
                        <ul>
                            <li>
                                <a href="/">Accueil</a>
                            </li>
                            <li>
                                <a href="/about">About</a>
                            </li>
                        </ul>
                    </nav>
            </header> */}
            <main>
                {children}
            </main>
            <footer>
                <em>Copyright Nicoleta</em>
            </footer>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };