import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",

    initialState: {
        cart: [],
    },

    reducers: {
        addToCart: (state, action) => {
            // // Receives the item object to be added to the state as payload
            // // Firstly, check if the item already exists using the `find` method
            // const itemInCart = state.cart.find(
            //     (item) => item.id === action.payload.id
            // );

            // if (itemInCart) {
            //     // if the item exists, increment its quantity
            //     itemInCart.quantity++;
            // } else {
            //     // if the item does not exists, add  it to the state using the `push` method
            //     state.cart.push({ ...action.payload, quantity: 1 });
            // }
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
