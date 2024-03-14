import { useEffect, useState } from 'react';
import BookingProgress from '../../BookingProgress';
import Wrapper from '../../Components/Wrapper';
import Item from './Item';
import { IConcession } from '~/types/Concession';
import useFetch from '~/hooks/useFetch';
import concessionApi from '~/api/concession';

const SnacksAndDrinks = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const {
        data: concessionList,
        loading,
        error,
    } = useFetch<IConcession[]>(async () => {
        const { data } = await concessionApi.getAll();
        return data;
    });

    return (
        <>
            <Wrapper title='Bắp & nước'>
                <BookingProgress />
                <div className='grid grid-cols-2 justify-center gap-[4px] text-center'>
                    {concessionList && concessionList.map((item, i) => <Item concession={item} key={i} />)}
                </div>
            </Wrapper>
        </>
    );
};

export default SnacksAndDrinks;
