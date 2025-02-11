import { createBrowserRouter } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from "../layouts/layout";
import { About } from "../views/about/About";
import { Home } from "../views/home/Home";
import ErrorPage from "../views/errors/error-page";
import { loader as logementLoader } from "../routes/loader/loader";
import  {Logement} from "../views/logement/Logement";
// import { Routes } from "react-router-dom";


/**
 * Constante gérant la route de mon application React
 */
export const routes = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout>
                <Home />
            </Layout>
        ),
        errorElement: (
            <Layout>
                <ErrorPage />
            </Layout>
        ),
    },
    {
        path:"/about",
        element: (
            <Layout>
                <About/>
            </Layout>
        ),
        errorElement: (
            <Layout>
                <ErrorPage />
            </Layout>
        ),
    },
    {
        path: "logement/:id",
        element: (
            <Layout>
                <Logement />
            </Layout>
        ),
        loader: logementLoader,
        errorElement: (
            <Layout>
                <ErrorPage />
            </Layout>
        ),
    },
    // {Exemple de mauvaise configuration de route:
    //     path: "*", // Equivalent de 404
    //     element: (
    //         <Layout>
    //             {<ErrorPage />} 
    //         </Layout>
    //     ),
    // }

    // {
    //     path:"*",
    //     element: (
    //         <Layout>
    //             <p></p>
    //         </Layout>
    //     ),
    //     // errorElement:<p>Error page ID Introuvable</p>
    //     errorElement: (
    //         <Layout>
    //             <ErrorPage />
    //         </Layout>
    //     ),
    // },
    // //                
   
   
])


// Exemple code de routing avec react-router-dom Chat Gpt:
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import ErrorPage from './error-page';
// import HomePage from './home-page';
// // ...other imports...

// function App() {
//     return (
//         <Router>
//             <Switch>
//                 <Route exact path="/" component={Home} />
//                 {/* ...other routes... */}
//                 <Route path="*" component={ErrorPage} />
//             </Switch>
//         </Router>
//     );
// }

// export default App;



// Exemple de routing cponfiguration avec react-router-dom IA:
// {/* <Route path="*" element={<ErrorPage />} */}

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ErrorPage from './Error-page';
// import HomePage from './Home';
// import AboutPage from './About';

// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/about" element={<AboutPage />} />
//                 {/* other routes */}
//                 <Route path="*" element={<ErrorPage />} />

//             </Routes>
//         </Router>
//     );
// }
// export default App;

