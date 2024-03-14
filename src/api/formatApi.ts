import { format } from 'date-fns';
import { REACT_API_URL } from '~/constants/env';
import axiosClient from './axiosClient';
import { IRegion } from '~/types/Region';
import { IFormat } from '~/types/Format';

const formatApi = {
    getAll() {
        const path = 'formats';
        return axiosClient.get<IFormat[]>(`${REACT_API_URL}/${path}`);
    },
};

export default formatApi;
