import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCourses = createAsyncThunk("courses/fetchCourses", async ()=>{
    return fetch("https://redux-cms.iran.liara.run/api/courses")
       .then((res)=>res.json()).then((data)=>data)
})
const slice = createSlice({
    name : "courses", 
    initialState : [],
    reducers : {},
    extraReducers: (builder) => {
        builder.addCase(fetchCourses.fulfilled , (state , action) => {
            state.push(...action.payload)

        })
    }
})

export default slice.reducer