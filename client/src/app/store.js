import { configureStore } from "@reduxjs/toolkit";
// Redux Persist
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
// redux thunk
import thunk from "redux-thunk";
// reducers
import cartReducer from "../features/cart/cartSlice";
import userReducer from "../features/user/userSlice";
import { combineReducers } from "redux";

const reducers = combineReducers({
    cart: cartReducer,
    user: userReducer,
});

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk],
});
