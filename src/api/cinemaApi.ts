import { ICinema } from '~/types/Cinema';
import axiosClient from './axiosClient';
import { REACT_API_URL } from '~/constants/env';

const cinemaApi = {
    getAll() {
        const path = 'cinemas';
        return axiosClient.get<ICinema[]>(`${REACT_API_URL}/${path}`);
    },
    getCinemasByRegionID(id: string) {
        const path = `cinemas/getCinemasByRegionID/${id}`;
        return axiosClient.get<ICinema[]>(`${REACT_API_URL}/${path}`);
    },
    getOne(id: string) {
        const path = `cinemas/${id}`;
        return axiosClient.get<ICinema>(`${REACT_API_URL}/${path}`);
    },
};

export default cinemaApi;
