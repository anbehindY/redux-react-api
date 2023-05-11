import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    isLoading: false,
    error: undefined,
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: builder => {

    }
});
export default userSlice.reducer;
