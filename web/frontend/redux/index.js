import { configureStore } from '@reduxjs/toolkit';
import inputFieldSlice from './reducers/inputFieldSlice';
import { settingSlice } from './reducers/settingSlice';
// import counterReducer from './reducers/'

export const store = configureStore({
    reducer: inputFieldSlice, settingSlice

})