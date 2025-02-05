import { createBrowserRouter } from "react-router-dom"
import { Layout } from "../layouts/layout"
import { About } from "../views/about/About"
import { Home } from "../views/home/Home"

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
        errorElement:<p>Error page</p>
    },
    {
        path:"/about",
        element: (
            <Layout>
                <About/>
            </Layout>
        ),
        errorElement:<p>Error page</p>
    },
    {
        path:"/logement/:id",
        element: (
            <Layout>
                <p>LOGEMENT AVEC ID</p>
            </Layout>
        ),
        errorElement:<p>Error page ID Introuvable</p>
    },
])