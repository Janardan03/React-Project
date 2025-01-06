import { createSlice } from "@reduxjs/toolkit";

// to create slice we need to provide its name, initial state of the slice and reducer function
// for different type of write actions

// here inside initial state (which takes an object) we have only single empty array because using 
// this slice we only need to maintain the list of items inside our cart, which is empty in start

// the we declare reducer functions for different types of write actions
// in every reducer function we get "state" which is the current state of our data and "action", which provides
// info of what happened, like dish added in the cart

// then we have to export actions and reduces

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            state.items.length = 0;
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;