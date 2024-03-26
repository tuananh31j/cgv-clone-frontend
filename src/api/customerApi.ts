import { ICustomer } from '~/types/Customer';
import axiosClient from './axiosClient';
import { REACT_API_URL } from '~/constants/env';

const customerApi = {
    getAll() {
        const path = `customers`;
        return axiosClient.get<ICustomer[]>(`${REACT_API_URL}/${path}`);
    },
    edit(id: string, body: Partial<ICustomer>) {
        const path = `customers/${id}`;
        return axiosClient.patch<ICustomer>(`${REACT_API_URL}/${path}`, body);
    },
};

export default customerApi;
