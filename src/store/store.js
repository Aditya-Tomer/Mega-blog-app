import { configureStore } from "@reduxjs/toolkit";
import { logout, login } from "./authSlice";

const store = configureStore({
    reducer: {
        login,
        logout
    }
})

export {store};