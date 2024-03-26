import axiosClient from './axiosClient';
import { IMovie } from '~/types/Movie';
import { REACT_API_URL } from '~/constants/env';

const movieApi = {
    getAll() {
        const path = 'movies';
        return axiosClient.get<IMovie[]>(`${REACT_API_URL}/${path}`);
    },
    getOne(id: string) {
        const path = `movies/${id}`;
        return axiosClient.get<IMovie>(`${REACT_API_URL}/${path}`);
    },
};

export default movieApi;
