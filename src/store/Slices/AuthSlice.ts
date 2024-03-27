import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi from '~/api/authApi';
import { ILoginForm } from '~/types/Auth';
type IInitialState = {
    login: {
        currentUser: { name: string; role: string; id: string };
        currentRequestId: undefined | string;
    };
    loading: boolean;
};
const initialState: IInitialState = {
    login: {
        currentUser: { name: '', role: '', id: '' },
        currentRequestId: undefined,
    },
    loading: false,
};
const loginAsyncThunk = createAsyncThunk('auth/login', async (body: ILoginForm, thunkAPI) => {
    const { data } = await authApi.login(body, { signal: thunkAPI.signal });
    return data;
});

const logoutAsyncThunk = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    await authApi.logout({ signal: thunkAPI.signal });
    return { name: '', role: '', id: '' };
});
const getMeAsyncThunk = createAsyncThunk('auth/me', async (_, thunkAPI) => {
    try {
        const { data } = await authApi.getMe();
        return { name: data.name, role: data.role, id: data._id };
    } catch (error) {
        console.log(error);

        return { name: '', role: '', id: '' };
    }
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
                const { accessToken, ...others } = action.payload;
                state.login.currentUser = others;
                localStorage.setItem('accessToken', accessToken);
            })
            .addCase(logoutAsyncThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(logoutAsyncThunk.fulfilled, (state, action) => {
                state.loading = false;
                localStorage.removeItem('accessToken');
                state.login.currentUser = action.payload;
            })
            .addCase(getMeAsyncThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(getMeAsyncThunk.rejected, (state) => {
                state.loading = false;
                state.login.currentUser.id = '';
                state.login.currentUser.role = '';
                state.login.currentUser.name = '';
            })
            .addCase(getMeAsyncThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.login.currentUser = action.payload;
            });
    },
});

export { loginAsyncThunk, logoutAsyncThunk, getMeAsyncThunk };
export default authSlice.reducer;
