import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchArtticles = createAsyncThunk("articles/fetchArtticles", async () => {
  return fetch("https://redux-cms.iran.liara.run/api/articles")
    .then((res) => res.json())
    .then((data) => data);
});

const slice = createSlice({
  name: "articls",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchArtticles.fulfilled,
      (state, action) => action.payload
    );
  },
});

export default slice.reducer;
