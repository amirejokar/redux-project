import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchArtticles = createAsyncThunk("articles/fetchArtticles", async () => {
  return fetch("https://redux-cms.iran.liara.run/api/articles")
    .then((res) => res.json())
    .then((data) => data);
});

export const removeArticles = createAsyncThunk(
  "articles/removeArticles",
  async (id) => {
    return fetch(`https://redux-cms.iran.liara.run/api/articles/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);

const slice = createSlice({
  name: "articls",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchArtticles.fulfilled,
      (state, action) => action.payload
    );
    builder.addCase(removeArticles.fulfilled, (state, action) => {
      const newState = state.filter(
        (articles) => articles.id !== action.payload.id
      );
      return newState;
    });
  },
});

export default slice.reducer;
