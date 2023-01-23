import { createSlice } from "@reduxjs/toolkit";

const movieDataSlice=createSlice({
    name:"movieData",
    initialState:[],
    reducers:{
        addMovie: (state,action)=>{
            state.push(action.payload)
        },
        deleteMovie: (state,action)=>{
            state=state.filter(item=>item.imdbId!==action.payload.imdbId);
            
        },
        updateMovie: (state,action)=>{
            state.map((item)=>{
                if(item.imdbId==action.payload.imdbId){
                    return {...item, Tittle:action.payload.Title, imdbRating: action.payload.imdbRating}
                }
            })
        },
    }
})

export const {addMovie,deleteMovie,updateMovie}=movieDataSlice.actions;

export default movieDataSlice.reducer;