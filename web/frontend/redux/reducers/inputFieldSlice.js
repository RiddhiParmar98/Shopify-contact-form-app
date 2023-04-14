import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input_fields: [],
  combinedObjects: [],
  labelObj: {},
  attributeObj: {},
  combinedObj: {},
};
export const inputFieldsSlice = createSlice({
  name: "inputs",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.input_fields = [...state.input_fields, action.payload];
    },
    addPayloadData: (state, action) => {
      const { label, type } = action.payload;
      if (type === 'label') {
        state.labelObj = {label:label};
      } else if (type === 'attribute') {
        state.attributeObj = {attributes: label};
        if (state.labelObj) {
          state.combinedObj = {
            ...state.labelObj,
            ...state.attributeObj
          };
        }
        state.combinedObjects.push(state.combinedObj);
      }
    },
    // createAllData: (state, action) => {
    //   state.payload_data = [...state.payload_data, action.payload];
    // },
    removeElement: (state, action) => {
      console.log('action: ', action);
     
    },
  },
});

export const { addElement, addPayloadData, removeElement } =
  inputFieldsSlice.actions;
export default inputFieldsSlice.reducer;
