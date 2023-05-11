import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_URL = 'https://randomuser.me/api/?results=5';
const fetchUsers = createAsyncThunk (
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

    },
});

export const userState = (state) => state.users;
export default userSlice.reducer;
