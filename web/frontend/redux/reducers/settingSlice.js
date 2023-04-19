import { createSlice } from "@reduxjs/toolkit";
import { postSMTPSettings } from "../actions/allActions";


const initialState = {
    settingData: {
        data: {},
        error: "",
        loading: false
    }
}

export const settingSlice = createSlice({
    name: "setting",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postSMTPSettings.pending, (state, action) => {
                return {
                    ...state,
                    settingData: {
                        loading: true,
                        data: {},
                        error: ""
                    }
                }
            })
            .addCase(postSMTPSettings.fulfilled, (state, action) => {
                return {
                    ...state,
                    settingData: {
                        loading: false,
                        data: action.payload,
                        error: ""
                    }
                }
            })
            .addCase(postSMTPSettings.rejected, (state, action) => {
                return {
                    ...state,
                    settingData: {
                        loading: false,
                        data: {},
                        error: action.payload
                    }
                }
            })
    }
})