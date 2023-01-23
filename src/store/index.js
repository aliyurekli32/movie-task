import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice"
import movieReducer from "./get-Movie"
import dataReducer from "./movieData-Slice"

const store=configureStore({
    reducer:{
        auth: authReducer,
        movie: movieReducer,
        data: dataReducer,
    }
})

export default store;