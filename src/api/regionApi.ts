import { REACT_API_URL } from '~/constants/env';
import axiosClient from './axiosClient';
import { IRegion } from '~/types/Region';

const regionApi = {
    getAll() {
        const path = 'regions';
        return axiosClient.get<IRegion[]>(`${REACT_API_URL}/${path}`);
    },
};

export default regionApi;
