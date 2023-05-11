import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GET_URL = "https://randomuser.me/api/?results=5";
export const fetchedUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await axios.get(GET_URL);
    return response.data.results;
  } catch (error) {
    return error.message;
  }
});
const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchedUsers.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(fetchedUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchedUsers.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const userState = (state) => state.users;
export const { addUser } = userSlice.actions;
export default userSlice.reducer;
