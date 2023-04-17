import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import api from "../../api/index";

export const postFormData = createAsyncThunk(
  "inputs/postFormData",
  async (formData) => {
    const response = await axios.post("https://shopify-backend-omega.vercel.app/api/custom_form", formData);
    console.log('response: ', response);
    return response.data.data;
  }
);
