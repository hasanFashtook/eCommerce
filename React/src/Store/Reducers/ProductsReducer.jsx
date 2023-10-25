import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../Actions/getCategories";
import { getProducts } from "../Actions/getProducts";

const initialState = {
    error: null,
    loading: false,
    success: false,
    // THIS STATES FOR Products
    products: [],
    // THIS STATES FOR CATEGORIES
    categories: [],
}
export const ProductsSlice = createSlice({
    initialState,
    name: 'ProductsSlice',
    reducers: {
    },
    extraReducers: (builder) => {
        // Get Categories reducer...
        builder.addCase(getCategories.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.error = null;
            state.categories = payload;
        });
        builder.addCase(getCategories.pending, (state) => {
            state.loading = true;
            state.error = null
        });
        builder.addCase(getCategories.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
            state.success = false;
        });
        // Get Products reducer...
        builder.addCase(getProducts.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.error = null;
            state.products = payload;
        });
        builder.addCase(getProducts.pending, (state) => {
            state.loading = true;
            state.error = null
        });
        builder.addCase(getProducts.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
            state.success = false;
        });
    }
});
// export const { } = ProductsSlice.actions;
export default ProductsSlice.reducer;
