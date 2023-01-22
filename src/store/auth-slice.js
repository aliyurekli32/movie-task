import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:"auth",
    initialState: [],

    reducers: {
        saveUser: (state,action)=>{
            
            state.push(action.payload)
        }
    }
})

export const {saveUser}=authSlice.actions;

export default authSlice.reducer;