import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMovie=createAsyncThunk(
    'movie/getMovie',async(search)=>{
        const resp= await fetch(`http://www.omdbapi.com/?t=${search}&plot=full&apikey=7d5a0125`).then(res=>res.json())
        return resp
    }
)

const movieSlice=createSlice({
    name:"movie",
    initialState: {
        isLoading: false,
        error: "",
        movie:{},
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(getMovie.pending,(state,action)=>{
            console.log(action)
            state.isLoading=true
        })
        builder.addCase(getMovie.fulfilled,(state,action)=>{
            console.log(action)
            state.isLoading=false;
            state.movie=action.payload;
        })
        builder.addCase(getMovie.rejected,(state,action)=>{
            state.isLoading=false;
            console.log(action)
            state.error=action.payload;
            // if(action.payload){
            //     state.error=action.payload.errorMessage;
            // }else{
            //     state.error = action.error.message
            // }
            
        })
    }
})

export default movieSlice.reducer;

