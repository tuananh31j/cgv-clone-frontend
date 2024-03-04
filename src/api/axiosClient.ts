import axios, { AxiosInstance } from 'axios';
import { useSelector } from 'react-redux';
import store, { RootState, useAppDispatch } from '~/store/store';
import auth from './authApi';
import { refreshTokenAsyncThunk } from '~/store/Slices/AuthSlice';
const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_REACT_API_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosClient.interceptors.request.use(
    async (config) => {
        const token = store.getState().auth.login.currentUser.accessToken;
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        console.log(config, 'rq');

        return config;
    },
    (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        const originalRequest = error.config;
        const accessToken = store.getState().auth.login.currentUser.accessToken;
        if (!originalRequest._retry && error.response.status === 401 && accessToken) {
            originalRequest._retry = true;
            store
                .dispatch(refreshTokenAsyncThunk())
                .then(() => axiosClient(originalRequest))
                .catch((error) => console.log(error, 'refresh'));
        }
        return Promise.reject(error);
    }
);

export default axiosClient;

// class AxiosClient {
//     instance: AxiosInstance;
//     constructor() {
//         this.instance = axios.create({
//             baseURL: process.env.REACT_API_URL,
//             headers: {
//                 'content-type': 'application/json',
//             },
//         });

//         this.instance.interceptors.request.use((config) => {
//             let date = new Date();
//             return config;
//         });
//     }
// }
