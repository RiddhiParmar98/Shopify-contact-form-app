import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input_fields: [],
  combinedObjects: [],
  labelObj: {},
  attributeObj: {},
  combinedObj: {},
  loading: false,
  error: null,
  success: false,
  formData: {}
};
export const inputFieldsSlice = createSlice({
  name: "inputs",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.input_fields = [...state.input_fields, action.payload];
      // localStorage.setItem("elementData",JSON.stringify(state.input_fields))
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
        // localStorage.setItem("input field data",JSON.stringify(state.combinedObjects))
      }
    },
    removeElement: (state, action) => {
      console.log('action: ', action);
     
    },
    postFormData: (state,action) => {
      state.formData = action.payload
    },
    // extraReducers: (builder) => {
    //   builder
    //     .addCase(postFormData.pending, (state) => {
    //       state.loading = true;
    //       state.error = null;
    //       state.success = false;
    //     })
    //     .addCase(postFormData.fulfilled, (state, action) => {
    //       state.formData = action.payload;
    //       state.loading = false;
    //       state.success = true;
    //     })
    //     .addCase(postFormData.rejected, (state, action) => {
    //       state.error = action.error.message;
    //       state.loading = false;
    //     });
    // },
    
  },
});

export const { addElement, addPayloadData, removeElement } =
  inputFieldsSlice.actions;
export default inputFieldsSlice.reducer;
