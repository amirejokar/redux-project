import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    return fetch("https://redux-cms.iran.liara.run/api/courses")
      .then((res) => res.json())
      .then((data) => data);
  }
);

export const removeCourse = createAsyncThunk(
  "courses/removeCourse",
  async (id) => {
    return fetch(`https://redux-cms.iran.liara.run/api/courses/${id}` ,{
      method: "DELETE",
    })
    .then((res) => res.json())
    .then((data) => data)
  }
)

export const addCourse = createAsyncThunk(
    "courses/addCourse",
    async (data) => {
        return fetch("https://redux-cms.iran.liara.run/api/courses",{
            method : "POST ",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(data)
        })
    }
)

const slice = createSlice({
  name: "courses",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.fulfilled, (state, action) => action.payload);
    builder.addCase(removeCourse.fulfilled , (state  ,action) => {
      const newCourses = state.filter((course) => course._id !== action.payload)
      return newCourses;
    } )
  },
});

export default slice.reducer;
