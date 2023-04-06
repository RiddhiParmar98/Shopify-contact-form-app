import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input_fields: [],
};

export const inputFieldsSlice = createSlice({
  name: "inputs",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.input_fields = [...state.input_fields, action.payload];
    },
  },
});

export const { addElement } = inputFieldsSlice.actions;
export default inputFieldsSlice.reducer;
