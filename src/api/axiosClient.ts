import axios, { AxiosInstance } from 'axios';
import { useSelector } from 'react-redux';
import store, { RootState, useAppDispatch } from '~/store/store';
import auth from './authApi';
import { IRefreshTokenResponse } from '~/types/Auth';
import { REACT_API_URL } from '~/constants/env';
const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_REACT_API_URL,
    timeout: 80000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

axiosClient.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        const accessToken = localStorage.getItem('accessToken');

        if (!originalRequest._retry && error.response.status === 401 && accessToken) {
            try {
                originalRequest._retry = true;
                const { accessToken: newAccessToken } = (
                    await axios.post<IRefreshTokenResponse>(
                        `${REACT_API_URL}/auth/refresh`,
                        {},
                        {
                            withCredentials: true,
                        }
                    )
                ).data;
                localStorage.setItem('accessToken', newAccessToken);
                return axiosClient(originalRequest);
            } catch (error) {
                console.log(error, 'rf');
            }
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
