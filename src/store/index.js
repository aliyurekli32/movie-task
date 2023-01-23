import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice"
import movieReducer from "./get-Movie"
const store=configureStore({
    reducer:{
        auth: authReducer,
        movie: movieReducer,
    }
})

export default store;