import { configureStore } from "@reduxjs/toolkit";
import screenReducer from "./Reducers/screenSize";
import toggleMenuReducer from "./Reducers/toggleMenu";

export const Store = configureStore({
  reducer: {
    screen: screenReducer,
    menu: toggleMenuReducer
  }
});
