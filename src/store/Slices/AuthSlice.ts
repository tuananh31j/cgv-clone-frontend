import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi from '~/api/authApi';
import { ILoginForm } from '~/types/Auth';
import { checkCookieExist } from '~/utilities/cookie';

type IInitialState = {
    login: {
        currentUser: { accessToken: string; name: string; role: string; id: string };
        currentRequestId: undefined | string;
    };
    loading: boolean;
};
const accessToken = localStorage.getItem('accessToken');
const meInfor = localStorage.getItem('me');
const refreshToken = checkCookieExist('refreshToken');

let myName = '';
let myRole = '';
let myId = '';
let myAccessToken = '';
if (meInfor && refreshToken && accessToken) {
    const meInforObj = JSON.parse(meInfor);
    myName = meInforObj.name;
    myRole = meInforObj.role;
    myId = meInforObj.id;
    myAccessToken = accessToken;
} else {
    localStorage.removeItem('me');
    localStorage.removeItem('accessToken');
}
const initialState: IInitialState = {
    login: {
        currentUser: { accessToken: myAccessToken, name: myName, role: myRole, id: myId },
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
    return { accessToken: '', name: '', role: '', id: '' };
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(loginAsyncThunk.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(loginAsyncThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.login.currentUser = action.payload;
                localStorage.setItem('accessToken', action.payload.accessToken);
                const { accessToken, ...others } = action.payload;
                localStorage.setItem('me', JSON.stringify(others));
            })
            .addCase(logoutAsyncThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(logoutAsyncThunk.fulfilled, (state, action) => {
                state.loading = false;
                localStorage.removeItem('accessToken');
                localStorage.removeItem('me');
                state.login.currentUser = action.payload;
            });
    },
});

export { loginAsyncThunk, logoutAsyncThunk };
export default authSlice.reducer;
