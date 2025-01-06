import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"


// here we are mentioning our slices for different requirements, like for cart we have cartSlice for which
// we have cartReducer

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default appStore;