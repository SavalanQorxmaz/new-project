import { configureStore } from "@reduxjs/toolkit";
import themeSliceReducer from './themeSlice';
import screenReducer from './screenSlice'


export const store = configureStore({
    reducer: {
        theme: themeSliceReducer,
        screen:screenReducer
    }
})