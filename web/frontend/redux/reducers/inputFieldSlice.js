import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://shopify-backend-omega.vercel.app/api";

export const postFormData = createAsyncThunk(
  "inputs/postFormData",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/custom_form", formData);
      console.log("response===> ", response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getFormData = createAsyncThunk(
  "category/getFormData",
  async () => {
    try {
      const response = await axios.get("/custom_form");
      console.log("response: ", response);
      return response.data.data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

const initialState = {
  input_fields: [],
  combinedObjects: [],
  labelObj: {},
  attributeObj: {},
  combinedObj: {},
  loading: "idle",
  error: null,
  success: false,
  formData: [],
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
      if (type === "label") {
        state.labelObj = { label: label };
      } else if (type === "attribute") {
        state.attributeObj = { attributes: label };
        if (state.labelObj) {
          state.combinedObj = {
            ...state.labelObj,
            ...state.attributeObj,
          };
        }
        state.combinedObjects.push(state.combinedObj);
        // localStorage.setItem("input field data",JSON.stringify(state.combinedObjects))
      }
    },
    removeElement: (state, action) => {
      console.log("action: ", action);
    },
    // postFormData: (state,action) => {
    //   state.formData = action.payload
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFormData.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(getFormData.fulfilled, (state, action) => {
        state.loading = "idle";
        state.formData = action.payload;
      })
      .addCase(getFormData.rejected, (state, action) => {
        state.loading = "idle";
        state.error = action.error.message;
      });
  },
});

export const { addElement, addPayloadData, removeElement } =
  inputFieldsSlice.actions;
export default inputFieldsSlice.reducer;
