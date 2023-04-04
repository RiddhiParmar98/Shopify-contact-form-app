import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  elementData: [],
};

export const inputFieldsSlice = createSlice({
  name: "elementData",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.elementData = [...state.elementData, action.payload];
    },
  },
});

export const { addElement } = inputFieldsSlice.actions;
export default inputFieldsSlice.reducer;
