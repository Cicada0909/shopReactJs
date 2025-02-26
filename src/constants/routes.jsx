import { createBrowserRouter } from "react-router-dom";
import PageLayout from "../layouts/PageLayout/PageLayout";
import Home from "../pages/Home/Home";
import { Cart } from "../pages/Cart/Cart";
import Product from "../pages/Product/Product";
import { pageRoutes } from "./pageRoutes";
import Favorites from "../pages/Favorites/Favorites";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PageLayout />,
        children: [
            {
                path: pageRoutes.commonRoutes.home,
                element: <Home />,
            },
            {
                path: pageRoutes.commonRoutes.category,
                element: <Home />,
            },
            {
                path: pageRoutes.cartRoutes.cart,
                element: <Cart />
            },
            {
                path: pageRoutes.productRoutes.product,
                element: <Product />
            },
            {
                path: pageRoutes.favoritesRoutes.favorites,
                element: <Favorites />
            },

        ]
    }
]);

export default router;