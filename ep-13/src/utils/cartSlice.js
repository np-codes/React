/*import { createAction, createReducer } from "@reduxjs/toolkit";

export const addItem = createAction('addItem');
export const removeItem = createAction('removeItem');
export const clearCart = createAction('clearCart');

const initialState = {items: ["pizza"]};

const cartSlice = createReducer (initialState,(builder)=>{
    builder
        .addCase('addItem',(state,action) => {
            state.items.push(action.payload);
        })
        .addCase('removeItem',(state) => {
            state.items.pop();
        })
        .addCase('clearCart',(state) => {
            state.items.length = 0;
        });
});

export default cartSlice;*/


import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice ({
    name: "cart",
    initialState: {
        cartitems: []
    },
    reducers: {
        addItem: (state,action)=>{
            state.cartitems.push(action.payload);
        },
        removeItem: (state,action) => {
            console.log("here in remove",action.payload)
            const itemtoremove = action.payload.card.info.id;
            state.cartitems = state.cartitems.filter(item => item.card.info.id !== itemtoremove)
        },
        clearCart: (state) => {
            state.cartitems.length = 0;
        }
    }
});

export default cartSlice.reducer;

export const {addItem,removeItem,clearCart} = cartSlice.actions;
