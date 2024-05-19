import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  return fetch("https://redux-cms.iran.liara.run/api/users")
    .then((res) =>res.json()
    .then((data) => data)
  );
});

export const removeUsers = createAsyncThunk("users/removeUsers" , async (id) => {
  return fetch(`https://redux-cms.iran.liara.run/api/users/${id}` , {
    method: "DELETE"
  })
  .then((res) => res.json())
  .then((data) => data)
}
)

const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.push(...action.payload);
    });
    builder.addCase(removeUsers.fulfilled , (state,action ) => {
      const newUsers = state.filter((user) => user.id !== action.payload.id)
      return newUsers
    })
  },
});

export default slice.reducer;
