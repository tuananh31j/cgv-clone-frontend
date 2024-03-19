import { REACT_API_URL } from '~/constants/env';
import { IOrder } from './../types/Order';
import axiosClient from './axiosClient';
const orderApi = {
    add(body: IOrder) {
        const path = 'orders';
        return axiosClient.post<IOrder>(`${REACT_API_URL}/${path}`, body);
    },
    getSoldSeatsList(id: string) {
        const path = `orders/seats/${id}`;
        return axiosClient.get<string[]>(`${REACT_API_URL}/${path}`);
    },
};

export default orderApi;
