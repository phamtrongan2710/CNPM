import Home from "../pages/Home/Home";
import Products from "../pages/Products";

const publicRoutes = [
    { path: "/", component: Home },
    { path: "/product", component: Products },
];

export { publicRoutes };
