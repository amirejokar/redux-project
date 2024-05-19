import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  return fetch("https://redux-cms.iran.liara.run/api/users")
    .then((res) =>res.json()
    .then((data) => data)
  );
});

const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.push(...action.payload.todos);
    });
  },
});

export default slice.reducer;
