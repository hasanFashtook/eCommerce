import { createSlice } from "@reduxjs/toolkit";

const screenSlice = createSlice({
  initialState: 768,
  name: 'screenSlice',
  reducers: {
    storeCurrentSize: (state, action) => {
      return action.payload
    }
  }
})

export const { storeCurrentSize } = screenSlice.actions;
export default screenSlice.reducer;