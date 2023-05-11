import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_URL = 'https://randomuser.me/api/?results=5';
export const fetchUsers = createAsyncThunk (
    'users/fetchUsers',
    async () => {
        try {
            const response = await axios.get(GET_URL);
            return [...response.results];
        } catch (error) {
            return error.message;
        }
    }
)
const initialState = {
    users: [],
    isLoading: false,
    error: undefined,
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.error, (state, action) => {
                state.error = action.error.message;
            })
    },
});

export const userState = (state) => state.users;
export default userSlice.reducer;
