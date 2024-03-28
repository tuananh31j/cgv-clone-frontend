import axios from 'axios';
import authApi from './authApi';
import { getCookie } from '~/utilities/cookie';
const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_REACT_API_URL,
    timeout: 260000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

axiosClient.interceptors.request.use(
    async (config) => {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = getCookie('refreshToken');
        if (accessToken && refreshToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
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
        const refreshToken = getCookie('refreshToken');

        if (!originalRequest._retry && error.response.status === 401 && accessToken && refreshToken) {
            try {
                originalRequest._retry = true;
                const { accessToken: newAccessToken } = (await authApi.refreshToken(refreshToken)).data;
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
