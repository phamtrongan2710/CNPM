import Home from "../pages/Home/Home";
import Products from "../pages/Products";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

const publicRoutes = [
    { path: "/", component: Home },
    { path: "/product", component: Products },
    { path: "/signin", component: Signin },
    { path: "/signup", component: Signup },
];

export { publicRoutes };
