import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi from '~/api/authApi';
import axiosClient from '~/api/axiosClient';
import { REACT_API_URL } from '~/constants/env';
import { ILoginForm, ILoginResponse } from '~/types/Auth';

type IInitialState = {
    login: {
        currentUser: { accessToken: string; name: string; role: string };
        currentRequestId: undefined | string;
    };
    loading: boolean;
};

const initialState: IInitialState = {
    login: {
        currentUser: { accessToken: '', name: '', role: '' },
        currentRequestId: undefined,
    },
    loading: false,
};
const loginAsyncThunk = createAsyncThunk('auth/login', async (body: ILoginForm, thunkAPI) => {
    const res = await authApi.login(body, { signal: thunkAPI.signal });
    return res.data;
});

const logoutAsyncThunk = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    await authApi.logout({ signal: thunkAPI.signal });
    return { accessToken: '', name: '', role: '' };
});

// const loginAsyncThunk = createAsyncThunk('auth/login', async (body: ILoginForm, thunkAPI) => {
//     const res = await axiosClient.post<ILoginResponse>(`${REACT_API_URL}/auth/login`, body, {
//         signal: thunkAPI.signal,
//     });
//     return res.data;
// });

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(loginAsyncThunk.pending, (state, action) => {
                state.loading = true;
                const o = action.meta.requestId;
            })
            .addCase(loginAsyncThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.login.currentUser = action.payload;
                localStorage.setItem('accessToken', action.payload.accessToken);
            })
            .addCase(logoutAsyncThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(logoutAsyncThunk.fulfilled, (state, action) => {
                state.loading = false;
                localStorage.removeItem('accessToken');
                state.login.currentUser = initialState.login.currentUser;
            });
    },
});

export { loginAsyncThunk, logoutAsyncThunk };
export default authSlice.reducer;
