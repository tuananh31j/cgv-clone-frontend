import { IBanner } from '~/types/Banner';
import axiosClient from './axiosClient';
import { REACT_API_URL } from '~/constants/env';

const bannerApi = {
    getBannerActive() {
        const path = 'banners/banners-active';
        return axiosClient.get<IBanner[]>(`${REACT_API_URL}/${path}`);
    },
};

export default bannerApi;
