import { ICinema } from '~/types/Cinema';
import axiosClient from './axiosClient';
import { REACT_API_URL } from '~/constants/env';

const cinemaApi = {
    getAll() {
        const path = 'cinemas';
        return axiosClient.get<ICinema[]>(`${REACT_API_URL}/${path}`);
    },
};

export default cinemaApi;
