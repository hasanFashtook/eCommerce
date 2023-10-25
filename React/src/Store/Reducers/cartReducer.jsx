import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    initialState: [],
    name: 'cartSlice',
    reducers: {

        addProductToCart: (state, action) => {
            const foundProduct = state.find(product => product.id == action.payload.id);
            if (foundProduct) {
                foundProduct.quantity += 1
            } else {
                const cloneProduct = { ...action.payload, quantity: 1 }
                state.push(cloneProduct)
            }
        },

        reduceQauntityFromCart: (state, action) => {
            state.find((product) => product.id == action.payload.id).quantity -= 1;
        },

        removeFromCart: (state, action) => {
            return state.filter((product) => product.id != action.payload.id);
        },

        clearCart: (state) => {
            state = [];
            return state;
        }
    }
})

export const { addProductToCart, reduceQauntityFromCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
