import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice'
const store = configureStore({
    reducer: {
        auth: authSlice
        // TODO: Add more slices for post
    }
})

export {store};