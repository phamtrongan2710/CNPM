// import pages
import Home from "../pages/Home/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Search from "../pages/Search";
import Checkout from "../pages/Checkout/Checkout";

import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

// import layouts
import DefaultLayout from "../layouts/DefaultLayout";
import LoginLayout from "../layouts/LoginLayout";

const publicRoutes = [
    { path: "/", component: Home, layout: DefaultLayout },
    { path: "/product", component: Products, layout: DefaultLayout },
    { path: "/product/:id", component: ProductDetail, layout: DefaultLayout },
    { path: "/search", component: Search, layout: DefaultLayout },
    { path: "/checkout", component: Checkout, layout: DefaultLayout },

    { path: "/signin", component: Signin, layout: LoginLayout },
    { path: "/signup", component: Signup, layout: LoginLayout },
];

export { publicRoutes };
