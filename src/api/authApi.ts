import { IRegisterForm } from './../types/Auth';
import { REACT_API_URL } from '~/constants/env';
import axiosClient from './axiosClient';
import axios, { AxiosRequestConfig } from 'axios';
import { ILoginResponse, IRefreshTokenResponse } from '~/types/Auth';
import { ICustomer } from '~/types/Customer';
const authApi = {
    login(body: { email: string; password: string }, config?: AxiosRequestConfig) {
        const path = 'auth/login';
        return axiosClient.post<ILoginResponse>(`${REACT_API_URL}/${path}`, body, { ...config });
    },
    register(body: IRegisterForm) {
        const path = 'auth/register';
        return axiosClient.post<IRegisterForm>(`${REACT_API_URL}/${path}`, body);
    },
    getMe() {
        const path = 'auth/me';
        return axiosClient.post<ICustomer>(`${REACT_API_URL}/${path}`);
    },
    refreshToken() {
        const path = 'auth/refresh';
        return axios.post<IRefreshTokenResponse>(
            `${REACT_API_URL}/${path}`,
            {},
            {
                withCredentials: true,
            }
        );
    },
    logout(config?: AxiosRequestConfig) {
        const path = 'auth/logout';
        return axiosClient.post(`${REACT_API_URL}/${path}`, {}, { ...config });
    },
};

export default authApi;
