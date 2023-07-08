import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",

    initialState: {
        cart: [],
    },

    reducers: {
        addToCart: (state, action) => {
            let contain = false;

            state.cart.map((item, index) => {
                if (item.data.data.id == action.payload.data.id) contain = true;
            });

            if (!contain)
                state.cart = [...state.cart, { data: action.payload }];
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
