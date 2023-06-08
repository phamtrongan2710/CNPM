import { configureStore } from "@reduxjs/toolkit";
// Redux Persist
import storage from "redux-persist/lib/storage";
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from "redux-persist";
import { persistReducer } from "redux-persist";
// redux thunk
import thunk from 'redux-thunk'
// reducers
import cartReducer from "../features/cart/cartSlice";
import { combineReducers } from "redux";

const reducers = combineReducers({
    cart: cartReducer,
});

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

// export default configureStore({
//     reducer: {
//         cart: persistedReducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [
//                     FLUSH,
//                     REHYDRATE,
//                     PAUSE,
//                     PERSIST,
//                     PURGE,
//                     REGISTER,
//                 ],
//             },
//         }),
// });

export default configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk],
});
