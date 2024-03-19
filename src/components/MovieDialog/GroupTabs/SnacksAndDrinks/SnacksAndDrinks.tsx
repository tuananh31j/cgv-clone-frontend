import { useCallback, useEffect, useState } from 'react';
import BookingProgress from '../../BookingProgress';
import Wrapper from '../../Components/Wrapper';
import Item from './Item';
import { IConcession } from '~/types/Concession';
import concessionApi from '~/api/concession';
import useAsync from '~/hooks/useAsync';
import Loading from '~/components/Loading';
import { IShowtime } from '~/types/Showtime';

const SnacksAndDrinks = ({
    propsBookingProgress,
    concessions,
    handleConcession,
    onclickToNextTab,
}: {
    concessions: IConcession[];
    propsBookingProgress: {
        showtimeTarget: IShowtime;
        concessions: { quanlity: number; concession: IConcession }[];
        seats: { index: number; name: string }[];
    };
    handleConcession: ({ quanlity, concession }: { quanlity: number; concession: IConcession }) => void;
    onclickToNextTab: () => void;
}) => {
    return (
        <>
            <Wrapper title='Bắp & nước'>
                <BookingProgress ticketInfor={propsBookingProgress} onClick={onclickToNextTab} />
                {concessions && (
                    <div className='grid grid-cols-2 justify-center gap-[4px] text-center'>
                        {concessions.map((item, i) => (
                            <Item
                                selectedConcessions={propsBookingProgress.concessions}
                                concession={item}
                                key={i}
                                handleConcession={handleConcession}
                            />
                        ))}
                    </div>
                )}
            </Wrapper>
        </>
    );
};

export default SnacksAndDrinks;
