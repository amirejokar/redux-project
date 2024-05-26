import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  return fetch("https://redux-cms.iran.liara.run/api/users").then((res) =>
    res.json().then((data) => data)
  );
});

export const removeUsers = createAsyncThunk("users/removeUsers", async (id) => {
  return fetch(`https://redux-cms.iran.liara.run/api/users/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => data);
});

export const addUser = createAsyncThunk("users/addUser", async (props) => {
  return fetch("https://redux-cms.iran.liara.run/api/users", {
    method: "POST",
    body: { ...props },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("data ==> " , data);
      return data ;
    });
});

const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => action.payload);
    builder.addCase(removeUsers.fulfilled, (state, action) => {
      const newUsers = state.filter((user) => user.id !== action.payload.id);
      return newUsers;
    });
    builder.addCase(addUser.fulfilled,(state , action ) => {
      const newUsers = state.push(action.payload)
      return newUsers;
    })
  },
});

export default slice.reducer;
