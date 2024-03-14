import { REACT_API_URL } from '~/constants/env';
import axiosClient from './axiosClient';
import { IShowtime } from '~/types/Showtime';

const showtimeApi = {
    getAll() {
        const path = 'showtimes';
        return axiosClient.get<IShowtime[]>(`${REACT_API_URL}/${path}`);
    },
    getOne(id: string) {
        const path = `showtimes/${id}`;
        return axiosClient.get<IShowtime>(`${REACT_API_URL}/${path}`);
    },
};

export default showtimeApi;
