import axios from 'axios';
import { IRefreshTokenResponse } from '~/types/Auth';
import { REACT_API_URL } from '~/constants/env';
const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_REACT_API_URL,
    timeout: 800000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

axiosClient.interceptors.request.use(
    async (config) => {
        const me = localStorage.getItem('me');
        const token = me ? JSON.parse(me).accessToken : null;
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
        const meString = localStorage.getItem('me');
        const me = meString ? JSON.parse(meString) : undefined;
        if (!originalRequest._retry && error.response.status === 401 && me && me.accessToken) {
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
                localStorage.setItem('me', JSON.stringify({ ...me, accessToken: newAccessToken }));
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
