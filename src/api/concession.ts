import { REACT_API_URL } from '~/constants/env';
import axiosClient from './axiosClient';
import { IConcession } from '~/types/Concession';

const concessionApi = {
    getAll() {
        const path = `concessions`;
        return axiosClient.get<IConcession[]>(`${REACT_API_URL}/${path}`);
    },
};

export default concessionApi;
