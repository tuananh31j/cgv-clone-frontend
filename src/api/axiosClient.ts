import axios from 'axios';
import authApi from './authApi';
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
        if (accessToken) {
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

        if (!originalRequest._retry && error.response.status === 401 && accessToken) {
            try {
                originalRequest._retry = true;
                const { accessToken: newAccessToken } = (await authApi.refreshToken()).data;
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
