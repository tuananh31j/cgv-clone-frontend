import { REACT_API_URL } from '~/constants/env';
import axiosClient from './axiosClient';
import axios, { AxiosRequestConfig } from 'axios';
import { ILoginResponse, IRefreshTokenResponse } from '~/types/Auth';
import { ICustomer } from '~/types/Customer';
const auth = {
    login(body: { email: string; password: string }, config?: AxiosRequestConfig) {
        const path = 'auth/login';
        return axiosClient.post<ILoginResponse>(`${REACT_API_URL}/${path}`, body, { ...config });
    },
    getMe() {
        const path = 'auth/me';
        return axiosClient.post<ICustomer>(`${REACT_API_URL}/${path}`);
    },
    refreshToken() {
        const path = 'auth/refresh';
        return axios.post<IRefreshTokenResponse>(`${REACT_API_URL}/${path}`, {
            withCredentials: true,
        });
    },
};

export default auth;
