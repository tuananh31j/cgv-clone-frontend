import { REACT_API_URL } from '~/constants/env';
import axiosClient from './axiosClient';
import { IMoviesShow, IShowtime } from '~/types/Showtime';

const showtimeApi = {
    getAll() {
        const path = 'showtimes';
        return axiosClient.get<IShowtime[]>(`${REACT_API_URL}/${path}`);
    },
    getOne(id: string) {
        const path = `showtimes/${id}`;
        return axiosClient.get<IShowtime>(`${REACT_API_URL}/${path}`);
    },
    getListMoviesShowtimeById(id: string) {
        const path = `showtimes/movies/${id}`;
        return axiosClient.get<IShowtime[]>(`${REACT_API_URL}/${path}`);
    },
    getMoviesNowShowing() {
        const path = 'showtimes/movies-now-showing';
        return axiosClient.get<IMoviesShow[]>(`${REACT_API_URL}/${path}`);
    },
    getMoviesComingSoon() {
        const path = 'showtimes/movies-coming-soon';
        return axiosClient.get<IMoviesShow[]>(`${REACT_API_URL}/${path}`);
    },
    getMoviesNowShowingByCinema() {
        const path = 'showtimes/movies-now-showing-by-cinema';
        return axiosClient.get<IMoviesShow[]>(`${REACT_API_URL}/${path}`);
    },
};

export default showtimeApi;
