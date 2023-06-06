import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: 0,
    },
    reducers: {
        add: (state) => {
            state.value += 1;
        },
    },
});

export const add = cartSlice.actions;

export default cartSlice.reducer;
