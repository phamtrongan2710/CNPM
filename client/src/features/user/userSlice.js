import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",

    initialState: {
        user: null,
    },

    reducers: {
        login: (state) => {},

        signup: (state) => {},
    },
});

export const { login, signup } = userSlice.actions;

export default userSlice.reducer;
