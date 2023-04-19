import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://shopify-backend-omega.vercel.app/api";

export const postFormData = createAsyncThunk(
  "inputs/postFormData",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/custom_form", formData);
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
      return response.data.data;
    } catch (error) {
      console.log("error", error);
    }
  }
);


// ========================================== settings API started  ==========================================

export const postSMTPSettings = createAsyncThunk("settings/smtpsettings", async (smtpsettingsData, { rejectWithValue }) => {
  try {
    const response = await axios.post("/setting", smtpsettingsData);
    return response.data
  } catch (error) {
    return rejectWithValue(error.response.data)
  }
})