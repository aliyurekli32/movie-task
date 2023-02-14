import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:"auth",
    initialState: JSON.parse(window.localStorage.getItem('auth')) || [],

    reducers: {
        saveUser: (state,action)=>{
            
            state.push(action.payload)
        }
    }
})

export const {saveUser}=authSlice.actions;

export default authSlice.reducer;