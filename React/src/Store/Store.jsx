import { configureStore } from "@reduxjs/toolkit";
import screenReducer from "./Reducers/screenSize";
import toggleMenuReducer from "./Reducers/toggleMenu";
import cartReducer from "./Reducers/cartReducer";
import usersReducer from "./Reducers/usersReducer";
import ProductsReducer from "./Reducers/ProductsReducer";

export const Store = configureStore({
    reducer: {
        screen: screenReducer,
        menu: toggleMenuReducer,
        cart: cartReducer,
        users: usersReducer,
        products: ProductsReducer,
    }
});
