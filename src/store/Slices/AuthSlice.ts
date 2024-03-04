import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import auth from '~/api/authApi';
import axiosClient from '~/api/axiosClient';
import { REACT_API_URL } from '~/constants/env';
import { ILoginForm, ILoginResponse } from '~/types/Auth';

type IInitialState = {
    login: {
        currentUser: { accessToken: string; name: string; role: string };
        loading: boolean;
        currentRequestId: undefined | string;
    };
};
const accessToken = localStorage.getItem('accessToken');

const initialState: IInitialState = {
    login: {
        currentUser: { accessToken: accessToken || '', name: '', role: '' },
        loading: false,
        currentRequestId: undefined,
    },
};
const loginAsyncThunk = createAsyncThunk('auth/login', async (body: ILoginForm, thunkAPI) => {
    const res = await auth.login(body, { signal: thunkAPI.signal });
    return res.data;
});

const refreshTokenAsyncThunk = createAsyncThunk('/auth/refresh', async (_, thunkAPI) => {
    const res = await auth.refreshToken({ signal: thunkAPI.signal });
    return res.data;
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
                state.login.loading = true;
                const o = action.meta.requestId;
            })
            .addCase(loginAsyncThunk.fulfilled, (state, action) => {
                state.login.loading = false;
                state.login.currentUser = action.payload;
                localStorage.setItem('accessToken', action.payload.accessToken);
            })
            .addCase(refreshTokenAsyncThunk.fulfilled, (state, action) => {
                state.login.currentUser.accessToken = action.payload.accessToken;
                localStorage.setItem('accessToken', action.payload.accessToken);
            });
    },
});

export { loginAsyncThunk, refreshTokenAsyncThunk };
export default authSlice.reducer;
