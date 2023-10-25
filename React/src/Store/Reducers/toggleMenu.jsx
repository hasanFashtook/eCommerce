import { createSlice } from "@reduxjs/toolkit";

export const toggleMenuSlice = createSlice({
    initialState: true,
    name: 'toggleMenu',
    reducers: {
        toggleState: (state, action) => {
            return state = action.payload
        }
    }
})
export const { toggleState } = toggleMenuSlice.actions;
export default toggleMenuSlice.reducer;
