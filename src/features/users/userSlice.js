import { createSlice } from '@reduxjs/toolkit';

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
