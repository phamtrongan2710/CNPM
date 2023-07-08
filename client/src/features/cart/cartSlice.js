import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",

    initialState: {
        cart: [],
    },

    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cart.find(
                (item) => item.data.data.id === newItem.data.id
            );

            if (existingItem) {
                // If the item already exists in the cart, increase its quantity
                existingItem.data.amount += 1;
            } else {
                // If the item is not in the cart, add it with quantity 1
                state.cart.push({ data: newItem });
            }
        },

        increaseQuantity: (state, action) => {
            let arr = [];

            state.cart.forEach((item) => {
                if (item.data.data.id == action.payload) {
                    item.data.amount += 1;
                }

                arr = [...arr, item];
            });

            state.cart = arr;
        },

        decreaseQuantity: (state, action) => {
            let arr = [];

            state.cart.forEach((item) => {
                if (item.data.data.id == action.payload) {
                    item.data.amount -= 1;
                }

                if (item.data.amount != 0) {
                    arr = [...arr, item];
                }
            });

            state.cart = arr;
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(
                (item) => item.data.data.id != action.payload
            );
        },

        clearCart: (state) => {
            state.cart = [];
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
