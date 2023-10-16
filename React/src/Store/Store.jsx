import { configureStore } from "@reduxjs/toolkit";
import screenReducer from "./Reducers/screenSize";
import toggleMenuReducer from "./Reducers/toggleMenu";
import cartReducer from "./Reducers/cartReducer";

export const Store = configureStore({
  reducer: {
    screen: screenReducer,
    menu: toggleMenuReducer,
    cart: cartReducer
  }
});
