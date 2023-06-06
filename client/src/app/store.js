import { configureStore } from "@reduxjs/toolkit";
// reducers
import cartReducer from "../features/cart/cartSlice";

export default configureStore({
    reducer: {
        cart: cartReducer,
    },
});
